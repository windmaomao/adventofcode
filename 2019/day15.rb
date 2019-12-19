require_relative 'utils/intcode'
require_relative 'utils/search'

def _to_key(pos)
  "#{pos[0]}|#{pos[1]}"
end

def _to_pos(key)
  key.split(?|).map(&:to_i)
end

def move(pos, dir) 
  y = pos[0]
  x = pos[1]
  return [y-1, x] if dir == 1
  return [y+1, x] if dir == 2
  return [y, x-1] if dir == 3
  return [y, x+1] if dir == 4
end 

dirs = [1, 2, 3, 4]
codes = {}

input = ARGF.read.split(?,).map(&:to_i)
origin = [0, 0]
codes[_to_key(origin)] = Intcode.new(input)
result = Search.bfs(
  _to_key(origin),
  neighbours: ->(pos_key) {
    pos = _to_pos(pos_key)
    dirs.map{ |dir| 
      new_pos = move(pos, dir)
      codes[_to_key(new_pos)] ||= codes[_to_key(pos)].dup.continue(
        input: dir
      )
      _to_key(new_pos) if codes[_to_key(new_pos)].output.last != 0
    }.compact
  },
  goal: ->(pos_key) {
    codes[pos_key].output.last == 2
  }
)

puts result[:gen]