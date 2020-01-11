N = 300
S = 2694

def power(x, y, s)
  id = x + 10
  n = ((id * y + s) * id).digits
  d = n.size > 2 ? n[2].to_i : 0
  d - 5
end

def max(p, size)
  maxPos = []
  maxVal = -100000
  count = N - size + 1
  (1..count).each{ |x|
    (1..count).each{ |y| 
      ps = 0
      (0..size-1).each { |i|
        (0..size-1).each { |j|
          ps += p[x+i][y+j]
        }
      }
      if (ps > maxVal) 
        maxVal = ps
        maxPos = [x, y]
      end
    }
  }
  [maxVal, maxPos]
end

powers = Array.new(N+2).map{|r| Array.new(N+2, 0) }
(1..N).map{ |x| 
  (1..N).map{ |y| 
    powers[x][y] = power(x, y, S)
  }
}

# Part 1
g = 3
v, p = max(powers, g)
p "#{p[0]},#{p[1]},#{g},#{v}"

# Part 2
best = 20.times.map{ |i| max(powers, i)}.sort.last
v, p = best
p "#{p[0]},#{p[1]},#{g},#{v}"
