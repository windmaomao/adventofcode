require_relative 'utils/search'

input = ARGF.each_line.map(&:chomp)

planets = {}
transfer = Hash.new{ |h,k| h[k] = [] }

input.each{ |row| 
  parent, child = row.split(?))
  planets[child] = parent
  transfer[child] << parent
  transfer[parent] << child
}

def depth(planets, planet) 
  parent = planets[planet] 
  !parent ? 0 : depth(planets, parent) + 1
end

puts planets.keys.map{|p| depth(planets, p)}.sum

start = planets['YOU']
goal = { planets['SAN'] => true }
bfs = Search.bfs(start, neighbours: transfer, goal: goal)
puts bfs[:gen]