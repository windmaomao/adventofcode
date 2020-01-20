fn = open("2015/07a.input")

Deps = Hash.new
input = fn.each_line.map(&:chomp).take(3).map{|l|
  ins = l.scan(/[a-z]+|\d+|[A-Z]+/)
  names = l.scan(/[a-z]+/)
  name = names.pop
  Deps[name] = [names, ins - [name]]
}

p Deps

def expr(eqn, vals)
  filled = eqn.map{|v| 
    case v 
    when 'AND'; '&'
    when 'OR'; '|'
    else
      v.to_i.to_s == v ? v.to_i : vals[v]
    end
  }.join(' ')
  eval(filled)
end

# Part 1

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

p vals