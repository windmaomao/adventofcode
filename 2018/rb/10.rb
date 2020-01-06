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
  plot.reverse.map{|r| r.join }
end

nodes = input.dup
i = 0
tmp = 1000000000000
while i < 100000
  nodes.each{ |n| 
    n[0] += n[2]
    n[1] += n[3]
  }
  x, y = calcRange(input)
  area = (x[1] - x[0]) * (y[1] - y[0])
  break if area > tmp
  tmp = area
  i += 1
end

p i
puts plotRange(input)