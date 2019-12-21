require_relative 'utils/intcode'

count_drones = ARGV.delete('-c')
slow = ARGV.delete('--slow')

input = (ARGV[0]&.include?(?,) ? ARGV[0] : ARGF.read).split(?,).map(&method(:Integer)).freeze
IC = Intcode.new(input)

@drones_sent = 0

def pull?(y, x)
  @drones_sent += 1
  IC.dup.continue(input: [x, y]).output[0] == 1
end

if slow
  # This would work but queries all 2500 points. We can do better.
  puts (0..49).sum { |y| (0..49).count { |x| pull?(y, x) } }
else
  # Save this info for part 2.
  current_scan = nil

  # Follow the edges. For typical inputs, queries around 300 points or fewer.
  # We could go from narrower to wider, but the beam disappears on a few rows,
  # and scanning left-to-right means we scan almost an entire row.
  # So we go from wider to narrower + right-to-left instead.
  # If the beam disappears, we only need to scan the area to the left of the previous edge.
  right_x = 49
  puts 49.downto(0).sum { |y|
    if (new_right_x = right_x.downto(0).find { |x| pull?(y, x) })
      # Found the right edge of this row.
      # Next scan will start from this new right edge.
      right_x = new_right_x
      # Where is left edge? Start from previous-known left edge, or if we don't know, right edge.
      left_x = (left_x || (new_right_x - 1)).downto(0).find { |x| !pull?(y, x) } || -1

      current_scan = {width: right_x - left_x, left_x: left_x}.freeze if y == 49

      right_x - left_x
    else
      current_scan = {width: 0, left_x: 0} if y == 49

      # Nothing in this row!
      # right_x stays the same, so next scan starts from last known right edge.
      # left_x becomes nil because we need to find a new left once we have a beam again.
      left_x = nil
      0
    end
  }
end

STDERR.puts "#@drones_sent drones" if count_drones

@drones_sent = 0

if slow
  # This works but queries too many points. Again, we can do better.
  min_x = 0
  puts 99.step { |y|
    # Find min x that's on for this row.
    min_x = min_x.step.find { |x| pull?(y, x) }
    # Treat that as bottom-left. Is top-right on?
    break min_x * 10000 + y - 99 if pull?(y - 99, min_x + 99)
  }

  STDERR.puts "#@drones_sent drones" if count_drones
  exit 0
end

# Scan a row using this principle:
#
# If a previous row was known to be WIDTH wide starting from PREV_LEFT,
# then assume this row is also at least WIDTH wide starting from l > PREV_LEFT.
# That means if we scan every WIDTH squares starting from PREV_LEFT, we'll find it.
#
# Detetermines the left and width of this row.
def scan_row(y, min_x, min_width)
  near_left_x = min_x.step(by: min_width).find { |x| pull?(y, x) }
  left_x = ((near_left_x - min_width + 1)...near_left_x).bsearch { |x| pull?(y, x) } || near_left_x
  max_width = 1.step { |power|
    width = min_width << power
    break width if !pull?(y, left_x + width)
  }
  {
    left_x: left_x,
    width: ((max_width / 2)..max_width).bsearch { |width| !pull?(y, left_x + width) },
  }.freeze
end

# For a 100x100 square, bottom row must be y >= 99, so we start there.
# Actually, it may be possible to start at y=149 if we know that y=49 is not a top row;
# for some inputs this is an improvement, for some others it's the opposite.
# So I'll save myself the bookkeeping required and just start at 99.
y = 99
prev_left = nil
current_scan = scan_row(99, current_scan[:left_x], current_scan[:width])

Y_STRIDE = 99

# Find a valid bottom row, a row with both of the following characteristics:
# Has width >= 100
# Has a matching top row.
# If I always increase y by 99, I could reuse information and not call `pull?` to check matching top.
# But I don't want to risk any off-by-one errors, so I'll just call it.
until current_scan[:width] >= 100 && pull?(y - 99, current_scan[:left_x] + 99)
  prev_left = current_scan[:left_x]
  # Previous scanned row is NOT a candidate top if its width < 100,
  # which means candidate bottom must be at least 100 more than that.
  # If it is a candidate top, at this point we can actually stride Y by whatever we want.
  # TODO: Maybe could pick a different stride length?
  y += (current_scan[:width] < 100 ? 100 : Y_STRIDE)
  current_scan = scan_row(y, current_scan[:left_x], current_scan[:width])
end

# At this point, y is a valid bottom, and y - Y_STRIDE is not.
# We'll just scan everything between them linearly,
# following the bottom edge.
# I don't feel like managing a binary search since if y varies,
# I'm not prepared to track the bounds for the x for a given y.
min_x = prev_left
puts (y - Y_STRIDE + 1).step { |y|
  # Find min x that's on for this row.
  min_x = min_x.step.find { |x| pull?(y, x) }
  # Treat that as bottom-left. Is top-right on?
  break min_x * 10000 + y - 99 if pull?(y - 99, min_x + 99)
}

STDERR.puts "#@drones_sent drones" if count_drones
