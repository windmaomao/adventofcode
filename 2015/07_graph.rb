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

vals = {}
require 'rgl/topsort'
require_relative './utils/expr'

# Part 1
dg.topsort_iterator.to_a.map{|name|
  vals[name] = expr(formulas[name], vals)
}
p vals['a']

# Part 2
formulas['b'][0] = vals['a'].to_s
dg.topsort_iterator.to_a.map{|name|
  vals[name] = expr(formulas[name], vals)
}
p vals['a']