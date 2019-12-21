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

def search(start, goal:) 
  Search.bfs(
    start,
    neighbours: ->(pos_key) {
      pos = _to_pos(pos_key)
      [1,2,3,4].map{ |dir| 
        new_pos = move(pos, dir)
        Codes[_to_key(new_pos)] ||= Codes[_to_key(pos)].dup.continue(
          input: dir
        )
        _to_key(new_pos) if Codes[_to_key(new_pos)].output.last != 0
      }.compact
    },
    goal: goal
  )
end

input = ARGF.read.split(?,).map(&:to_i)
Codes = {}
origin = [0, 0]
origin_key = _to_key(origin)
Codes[origin_key] = Intcode.new(input)

result = search(origin_key, goal: ->(pos_key) { 
  Codes[pos_key].output.last == 2 
})
puts result[:gen]

ys, xs = Codes.keys.map{ |pos_key| _to_pos(pos_key) }.transpose
Range.new(*ys.minmax).each { |y| 
  puts Range.new(*xs.minmax).map{ |x| 
    pos_key = _to_key([y, x])
    next ?S if pos_key == _to_key(origin)
    code = Codes[pos_key]
    next ?# unless code
    case code.output.last
    when 0; ?#
    when 1; ' '
    when 2; ?O
    end
  }.join
}

o_pos_key = result[:goals].keys.first

result = search(o_pos_key, goal: ->_ {})

puts result[:gen]