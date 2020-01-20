fn = open("2015/07a.input")

Deps = Hash.new
input = fn.each_line.map(&:chomp).map{|l|
  ins = l.scan(/[a-z]+|\d+|[A-Z]+/)
  names = l.scan(/[a-z]+/)
  name = names.pop
  Deps[name] = [names, ins - [name]]
}

p Deps.size

# Part 1

found = []
res = []
i = 0
while found.size < Deps.size
  selected = Deps.select{ |k, v| v[0] & found == v[0]}.keys - found  
  selected.each{|name| 
    found << name
    res << Deps[name][1]
  }
end

p res