require_relative 'utils/search'

fn = open("../inputs/day6.data")
input = fn.each_line.map(&:chomp)

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

puts planets.keys.map{|p| depth(planets, p)}.inject(0, :+)

start = planets['YOU']
goal = { planets['SAN'] => true }
bfs = Search.bfs(start, neighbours: transfer, goal: goal)
puts bfs[:gen]
# puts Search.path_of(bfs[:prev], planets['SAN']).count