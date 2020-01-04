fn = open("2018/input/06a")
input = fn.each_line.map(&:chomp).map{|l|
  l.split(", ").map(&:to_i).freeze
}.freeze

# (0..1).map{ |i|
#   p input.map{|v| v[i]}.minmax
# }

N = 9
puts (0..N).map{ |y|
  (0..N).map{ |x|
    dist = input.map{ |c| (x - c[0]).abs + (y - c[1]).abs }
    minDist, closeId = dist.each_with_index.min
    isUniq = dist.select{ |v| v == minDist }.size == 1
    isUniq ? (closeId+65).chr : '.'
  }.join('')
}