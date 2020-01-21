fn = open("2015/07.input")
require 'rgl/adjacency'
dg=RGL::DirectedAdjacencyGraph.new
formulas = {}
input = fn.each_line.map(&:chomp).map{|l|
  ins = l.scan(/[a-z]+|\d+|[A-Z]+/)
  names = l.scan(/[a-z]+/)
  name = names.pop
  formulas[name] = ins - [name]
  dg.add_vertex(name)
  names.each{|n| dg.add_edge(n, name) }
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


vals = {}
require 'rgl/topsort'
dg.topsort_iterator.to_a.map{|name|
  vals[name] = expr(formulas[name], vals)
}

p vals['a']