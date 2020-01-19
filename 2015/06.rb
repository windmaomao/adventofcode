fn = open("2015/06.input")
# 0, off, 1, on, 2, toggle
flags = ['f', 'n', ' ']
input = fn.each_line.map(&:chomp).map{|l|
  [flags.index(l[6])] + l.scan(/\d+/).map(&:to_i)
}


# input = [
#   [1, 0, 0, 9, 9],
#   [2, 0, 0, 9, 0],
#   [0, 0, 9, 9, 9]
# ]
N = 1000
lights = Array.new(N*N, 0)

input.each{|l|
  op, l, t, r, b = l
  (t..b).each{|y| 
    (l..r).each{|x|
      p = y * N + x
      lights[p] = 0 if op == 0
      lights[p] = 1 if op == 1
      lights[p] = 1 - lights[p] if op == 2
    }
  }
}

p lights.count(1)
# p lights
