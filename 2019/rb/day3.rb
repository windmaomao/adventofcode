require 'set'

fn = open("2019/inputs/day3.data")

DIRS = {
  ?U => [0, 1],
  ?D => [0, -1],
  ?L => [-1, 0],
  ?R => [1, 0],
}

def path(s) 
  x, y = 0, 0
  pts = Set.new
  props = {}
  len = 0
  
  s.split(?,).each{ |mov|
    num = mov[1..-1].to_i
    dx, dy = DIRS[mov[0]]
    (1..num).each { |i|
      x, y = x + dx, y + dy
      pt = [x, y]
      pts.add(pt)
      len += 1
      props[pt] = len
    }
  }

  [pts, props]
end

def manhattan(pos) 
  pos.map{|x| x.abs }.sum
end

l1, l2 = fn.each_line.map(&:chomp)
p1, s1 = path(l1)
p2, s2 = path(l2)

intersects = p1 & p2
p intersects.map{ |p| manhattan(p) }.min
p intersects.map{ |p| s1[p] + s2[p] }.min