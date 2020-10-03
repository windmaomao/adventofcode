fn = open("2015/06.input")
# 0, off, 1, on, 2, toggle
flags = ['f', 'n', ' ']
input = fn.each_line.map(&:chomp).map{|l|
  [flags.index(l[6])] + l.scan(/\d+/).map(&:to_i)
}

# Part 1

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

# Part 2

lights = Array.new(N*N, 0)

input.each{|l|
  op, l, t, r, b = l
  (t..b).each{|y| 
    (l..r).each{|x|
      p = y * N + x
      if op == 0
        lights[p] -= 1
        lights[p] = 0 if lights[p] < 0
      else
        lights[p] += op
      end
    }
  }
}

p lights.inject(&:+)
