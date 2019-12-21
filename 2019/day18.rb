require_relative 'utils/search'

def bitfield(chars, range)
  base = range.begin.ord
  chars.select { |c| range.cover?(c) }.map { |c| 1 << (c.ord - base) }.reduce(0, :|)
end

input = ARGF.each_line.map(&:chomp).map(&:freeze).freeze
# Represent position as y * width + x, indexing into flattened grid.
# The edge of the grid is all walls, so this is fine.
height = input.size
width = input.map(&:size).max
flat_input = input.map { |l| l.ljust(width, ' ') }.join.freeze

sources = []
starting_robots = []
num_keys = 0

input.each_with_index { |row, y|
  row.chars.each_with_index { |cell, x|
    pos = y * width + x
    if (?a..?z).cover?(cell)
      num_keys += 1
      sources << pos
    end
    if cell == ?@
      starting_robots << pos
      sources << pos
    end
  }
}

# AoC-specific optimisation:
# For all paths between key -> key that contain doors,
# the doors block the ONLY path to the key.
# Given this property is true, all key -> key paths are precomputed.
# This property is false for these inputs, with sources:
# https://www.reddit.com/r/adventofcode/comments/ecj4e7/2019_day_18_challenging_input/
# ##########
# #.a###.Ab#
# #.B..@.###
# #...######
# ##########
# https://www.reddit.com/r/adventofcode/comments/ecgyey/2019_day_18_part_1_im_not_seeing_how_to_optimize/fbc3iih/
# #######
# #....@#
# #.###A#
# #.###b#
# #.aBCc#
# #######
keys_from = sources.to_h { |src|
  keys = Search.bfs(
    src, num_goals: Float::INFINITY,
    neighbours: ->pos {
      [pos - width, pos + width, pos - 1, pos + 1].select { |npos|
        flat_input[npos] != '#'
      }
    },
    goal: ->pos { (?a..?z).cover?(flat_input[pos]) },
  )

  [src, keys[:goals].map { |pos, dist|
    path = Search.path_of(keys[:prev], pos)
    things_on_path = path.map { |path_pos| flat_input[path_pos] }

    {
      pos: pos,
      dist: dist,
      # Represent keys and doors as bitfields so set intersections become cheap
      # There might be multiple keys on a path, so we pick them all up.
      keys: bitfield(things_on_path, ?a..?z),
      doors: bitfield(things_on_path, ?A..?Z),
    }.freeze
  }.freeze]
}.freeze

have_all_keys = (1 << num_keys) - 1

# Pack all robot positions into one int.
# Unfortunately, all robot positions + key bitfield would not fit into one int.
bits_per_robot = (height * width).to_s(2).size
robot_mask = (1 << bits_per_robot) - 1
robot_base = (0...starting_robots.size).map { |i| bits_per_robot * i }

cost, _junk = Search.astar(
  [starting_robots.zip(robot_base).map { |pos, base| pos << base }.reduce(0, :|), 0],
  neighbours: ->((robots, keys)) {
    robot_base.flat_map { |base|
      robot = (robots >> base) & robot_mask

      keys_from[robot].map { |key|
        # Have these keys already.
        next if key[:keys] & keys == key[:keys]
        # Don't have all keys needed.
        next unless key[:doors] & keys == key[:doors]

        new_robots = (robots & ~(robot_mask << base)) | (key[:pos] << base)
        [[new_robots, keys | key[:keys]], key[:dist]]
      }.compact
    }
  },
  # heuristic - max dist to remaining keys is at most harmless,
  # but does help for certain inputs, it seems.
  # can always easily swap it out:
  # heuristic: Hash.new(0),
  heuristic: ->((robots, keys)) {
    robot_base.sum { |base|
      robot = (robots >> base) & robot_mask

      keys_from[robot].map { |key|
        # Have these keys already.
        next 0 if key[:keys] & keys == key[:keys]
        key[:dist]
      }.max
    }
  },
  goal: ->((_, keys)) { keys == have_all_keys },
)

puts cost
