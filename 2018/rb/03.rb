require 'set'

fn = open("2018/input/03")

def splitNums(str)
  str.split(/[# @,:x]/).delete_if(&:empty?).map(&:to_i)
end

input = fn.each_line.map(&:chomp).map{|s| splitNums(s)}

# Part 1
def fabricPts(x, y, w, h)
  m = []
  w.times do |i|
    h.times do |j|
      m << [x + i, y + j]
    end
  end
  m
end

fabrics = input.map{|f| fabricPts(f[1],f[2],f[3],f[4])}
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
p fabrics.index{|pts| 
  pts.all? { |pt|
    x, y = pt
    c = x * N + y
    fm[c] == 1
  }
} + 1