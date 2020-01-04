fn = open("2018/input/06")
input = fn.each_line.map(&:chomp).map{|l|
  l.split(", ").map(&:to_i).freeze
}.freeze

p input