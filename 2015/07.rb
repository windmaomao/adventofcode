fn = open("2015/07a.input")

Deps = Hash.new
input = fn.each_line.map(&:chomp).map{|l|
  ins = l.scan(/[a-z]+|\d+|[A-Z]+/)
  names = l.scan(/[a-z]+/)
  name = names.pop
  Deps[name] = [names, ins - [name], nil]
}

def eval(eqn, names, vals)
  1
end

# Part 1

found = []
while found.size < Deps.size
  selected = Deps.select{ |k, v| v[0] & found == v[0]}.keys - found  
  selected.each{|name| 
    found << name
    names, eqn, _ = Deps[name]
    vals = names.map{|n| Deps[n][2]}
    Deps[name][2] = eval(eqn, names, vals)
  }
end

p Deps