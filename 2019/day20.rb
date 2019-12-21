require_relative 'utils/search'

def parse_maze(flat_input, height, width)
  portal_pairs = Hash.new { |h, k| h[k] = {outer: nil, inner: nil} }
  portal_entrances = {}

  dirs = [-width, width, -1, 1].freeze

  flat_input.each_char.with_index { |cell, pos|
    next if pos < width
    next unless flat_input[pos + width]

    # Find letters with dots next to them.
    next unless (?A..?Z).cover?(cell)
    next unless (dir_with_dot = dirs.find { |dpos| flat_input[pos + dpos] == ?. })

    other_letter = flat_input[pos - dir_with_dot]

    # dot below (+width) or to right (+1) of letter means other letter comes first.
    # dot above (-width) or to left (-1) of letter means other letter comes second.
    id = dir_with_dot > 0 ? other_letter + cell : cell + other_letter

    y, x = (pos - dir_with_dot).divmod(width)
    type = y == 0 || y == height - 1 || x == 0 || x == width - 1 ? :outer : :inner

    raise "REPEAT #{id} #{type}" if portal_pairs[id][type]
    dot_pos = pos + dir_with_dot
    portal_entrances[dot_pos] = true
    portal_pairs[id][type] = dot_pos
  }

  portal_entrances.freeze

  start = nil
  goal = nil

  dists = {}

  portal_pairs.each { |k, v|
    if k == 'AA'
      raise 'inner AA' if v[:inner]
      start = v[:outer]
    elsif k == 'ZZ'
      raise 'inner ZZ' if v[:inner]
      goal = v[:outer]
    else
      raise "MISSING INNER FOR #{k}" unless v[:inner]
      raise "MISSING OUTER FOR #{k}" unless v[:outer]
      dists[v[:outer]] = [[v[:inner], 1, -1].freeze].freeze
      dists[v[:inner]] = [[v[:outer], 1, 1].freeze].freeze
    end
  }

  [
    start, goal,
    dists.merge(portal_to_portal(flat_input, dirs, portal_entrances)) { |_, v1, v2|
      (v1 + v2).freeze
    }.freeze,
  ]
end

def portal_to_portal(flat_input, dirs, portal_entrances)
  portal_entrances.keys.to_h { |src|
    other_portals = Search.bfs(
      src, num_goals: Float::INFINITY,
      neighbours: ->pos {
        dirs.map { |dpos| pos + dpos }.select { |npos| flat_input[npos] == ?. }
      },
      goal: ->pos { pos != src && portal_entrances.has_key?(pos) },
    )

    [src, other_portals[:goals].map { |pos, dist|
      [pos, dist, 0]
    }]
  }.freeze
end

input = ARGF.each_line.map(&:chomp).map(&:freeze).freeze
width = input.map(&:size).max
flat_input = input.map { |l| l.ljust(width, ' ') }.join.freeze
height = input.size
start, goal, dists = parse_maze(flat_input, height, width)
maze_size = flat_input.size

search = ->depth_mult {
  # Attempts to prove a bound on depth have failed:
  # https://www.reddit.com/r/adventofcode/comments/ed5ei2/2019_day_20_solutions/fbg6p0s/
  # Maze with:
  # long corridor whose distance means an optimal solution crosses it once
  # left side allowing depths 4, 9, 14... to connect to long corridor
  # right side allowing depths 6, 12, 18... to connect to long corridor
  # Only contains 11 portal pairs, but best path would go down to depth 24.
  #
  # Only remaining hope is if there is a property of the inputs to exploit.
  #
  # However, I need to set some limit here, to allow example 2 to pass on part 2 test.
  # Don't want to doom myself to wander the halls of Pluto for all eternity.
  # The input described above had its depth determined by multiplying (n - k) * k
  # So we'll just limit at the maximum this value could be,
  # which is splitting the number of pairs in half as equally as possible.
  # 11 -> 6 * 5, 12 -> 6 * 6, etc.
  portal_pairs = (dists.size - 2) / 2
  half_up = (portal_pairs + 1) / 2
  max_depth = portal_pairs / 2 * half_up

  cost, _junk = Search.astar(
    start,
    goal: {goal => true}.freeze,
    heuristic: Hash.new(0).freeze,
    neighbours: ->depth_and_pos {
      depth, pos = depth_and_pos.divmod(maze_size)
      dists[pos].map { |dest, dist, depth_change|
        new_depth = depth + depth_change * depth_mult
        [new_depth * maze_size + dest, dist] if (0..max_depth).cover?(new_depth)
      }.compact
    },
  )
  cost || 'impossible'
}

puts search[0]
puts search[1]
