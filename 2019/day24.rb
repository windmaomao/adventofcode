SIDE_LEN = 5
SIZE = SIDE_LEN * SIDE_LEN
MID_COORD = SIDE_LEN / 2

NUM_ITERS = Hash.new(200)
NUM_ITERS[1205552] = 10

POS_BITS = SIZE.to_s(2).size
POSES = SIZE.times.to_a.freeze

def grow_bugs(grids, neigh)
  neigh_count = Hash.new(0)

  grids.each_with_index { |grid, level|
    work = grid
    pos = 0
    until work == 0
      if work & 1 == 1
        neigh[pos].each { |dlevel, npos|
          nlevel = level + dlevel
          neigh_count[(nlevel << POS_BITS) | npos] += 1
        }
      end
      work >>= 1
      pos += 1
    end
  }

  levels = neigh_count.keys.map { |k| k >> POS_BITS }

  Range.new(*levels.minmax).map { |level|
    POSES.sum { |pos|
      nc = neigh_count[(level << POS_BITS) | pos]
      now_alive = nc == 1 || nc == 2 && (
        !(0...grids.size).cover?(level) || (grids[level] >> pos) & 1 == 0
      )
      now_alive ? 1 << pos : 0
    }
  }
end

def neigh_map(recursive: false)
  in_bounds = ->*ns { ns.all? { |n| (0...SIDE_LEN).cover?(n) } }

  SIZE.times.map { |pos|
    y, x = pos.divmod(SIDE_LEN)

    directions = [
      [-1, 0, ->nx { [1, SIDE_LEN - 1, nx] }],
      [1, 0,  ->nx { [1, 0,            nx] }],
      [0, -1, ->ny { [1, ny,           SIDE_LEN - 1] }],
      [0, 1,  ->ny { [1, ny,           0] }],
    ]

    unless recursive
      next directions.map { |dy, dx, _|
        ny = y + dy
        nx = x + dx
        [0, ny * SIDE_LEN + nx] if in_bounds[ny, nx]
      }.compact
    end

    directions.flat_map { |dy, dx, inner_neigh|
      ny = y + dy
      nx = x + dx
      if ny == MID_COORD && nx == MID_COORD
        SIDE_LEN.times.map(&inner_neigh)
      elsif in_bounds[ny, nx]
        [[0, ny, nx]]
      else
        [[-1, MID_COORD + dy, MID_COORD + dx]]
      end
    }.map { |d, ny, nx| [d, ny * SIDE_LEN + nx] }
  }.freeze
end

def first_repeat(x)
  seen = {}
  until seen[x]
    seen[x] = true
    x = yield x
  end
  x
end

def show_grids(grids)
  grids.each_with_index { |g, i|
    puts i
    bits = g.digits(2)
    bits << 0 until bits.size == SIZE
    bits.each_slice(SIDE_LEN) { |row| puts row.join.tr('01', '.#') }
    puts
  }
end

verbose = ARGV.delete('-v')
input = ARGF.each_line.map { |l|
  l.chomp.each_char.with_index.sum { |c, i| (c == ?# ? 1 : 0) << i }
}.each_with_index.sum { |r, i| r << (i * SIDE_LEN) }

neigh = neigh_map
repeat = first_repeat(input) { |x|
  xs = grow_bugs([x], neigh)
  raise "expanded to another level in part 1??? #{grids}" if xs.size != 1
  xs[0]
}
show_grids([repeat]) if verbose
p repeat

neigh = neigh_map(recursive: true)
grids = [input]
NUM_ITERS[input].times { grids = grow_bugs(grids, neigh) }
show_grids(grids) if verbose
p grids.sum { |g| g.digits(2).count(1) }