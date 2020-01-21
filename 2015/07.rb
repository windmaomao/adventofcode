fn = open("2015/07.input")

Deps = Hash.new
input = fn.each_line.map(&:chomp).map{|l|
  ins = l.scan(/[a-z]+|\d+|[A-Z]+/)
  names = l.scan(/[a-z]+/)
  name = names.pop
  Deps[name] = [names, ins - [name]]
}

require_relative './utils/expr'
def solve()
  found = []
  vals = {}
  while found.size < Deps.size
    selected = Deps.select{ |k, v| v[0] & found == v[0]}.keys - found  
    selected.each{|name| 
      found << name
      names, eqn = Deps[name]
      vals[name] = expr(eqn, vals)
    }
  end
  vals
end

# Part 1
sln = solve()
p sln['a']

# Part 2
Deps['b'][1][0] = sln['a'].to_s
sln = solve()
p sln['a']