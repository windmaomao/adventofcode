fn = open("2015/07.input")

Deps = Hash.new
input = fn.each_line.map(&:chomp).map{|l|
  ins = l.scan(/[a-z]+|\d+|[A-Z]+/)
  names = l.scan(/[a-z]+/)
  name = names.pop
  Deps[name] = [names, ins - [name]]
}

def expr(eqn, vals)
  filled = eqn.map{|v| 
    case v 
    when 'AND'; '&'
    when 'OR'; '|'
    when 'LSHIFT'; '<<'
    when 'RSHIFT'; '>>'
    when 'NOT'; '~'
    else
      v.to_i.to_s == v ? v : vals[v]
    end
  }.join(' ')
  eval(filled) % 65536
end

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
