require 'set'

fn = open("2018/input/03")
input = fn.each_line.map(&:chomp)

# Part 1
def fabricPts(x, y, w, h)
  m = []
  (x..x+w-1).each{ |i| 
    (y..y+h-1).each{ |j| 
      m << [i, j]
    }
  }
  m
end


fabrics = []
fabrics << fabricPts(1, 3, 4, 4)
fabrics << fabricPts(3, 1, 4, 4)
fm = {}

N = 1000*1000
fabrics.each{ |pts|
  pts.each{ |pt| 
    x, y = pt
    c = x * N + y
    fm[c] = fm[c] ? fm[c] + 1 : 1
  }
}

p fm.count{ |_, v| v > 1 }

# Part 2