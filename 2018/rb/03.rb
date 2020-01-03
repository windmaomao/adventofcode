require 'set'

fn = open("2018/input/03")

def splitNums(str)
  str.split(/[# @,:x]/).delete_if(&:empty?).map(&:to_i)
end

def fabricPts(x, y, w, h)
  m = []
  w.times do |i|
    h.times do |j|
      m << [x + i, y + j]
    end
  end
  m
end

input = fn.each_line.map(&:chomp).map{|s| 
  i, x, y, w, h = splitNums(s)
  fabricPts(x, y, w, h)
}

# Part 1
fm = Hash.new { |h, k| h[k] = 0 }

input.each{ |pts|
  pts.each{ |pt| 
    fm[pt] += 1
  }
}

p fm.count{ |_, v| v > 1 }

# Part 2
p input.index{|pts| 
  pts.all? { |pt|
    fm[pt] == 1
  }
} + 1