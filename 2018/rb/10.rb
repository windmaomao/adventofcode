fn = open("2018/input/10")
input = fn.each_line.map(&:chomp).map{ |l| 
  n = l.scan(/\-\d+|\d+/).map(&:to_i)
}

def calcRange(arr)
  (0..1).map{|d|
    arr.map{|n| n[d]}.minmax
  }
end

def plotRange(arr)
  x, y = calcRange(arr)
  xl, yl = [x[1]-x[0]+1, y[1]-y[0]+1]
  plot = Array.new(yl).map{|r| Array.new(xl, '.')}
  arr.each{|n| plot[n[1]-y[0]][n[0]-x[0]] = '#' }
  plot.map{|r| r.join }
end

current = input
i = 0
tmp = 1000000000000
area = 0
while true
  newPos = current.map.with_index{ |n, j| 
    vx, vy = input[j][2, 2]
    x, y = n
    [x + vx, y + vy]
  }
  xr, yr = calcRange(newPos)
  area = (xr[1] - xr[0]) * (yr[1] - yr[0])

  break if area > tmp
  tmp = area
  i += 1
  current = newPos
end

# Part 1
puts plotRange(current)
# Part 2
p i
