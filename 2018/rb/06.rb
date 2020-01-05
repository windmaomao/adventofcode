fn = open("2018/input/06")
input = fn.each_line.map(&:chomp).map{|l|
  l.split(", ").map(&:to_i).freeze
}.freeze

# (0..1).map{ |i|
#   p input.map{|v| v[i]}.minmax
# }

# Part 1

N = 400
distMap = (0..N).map{ |y|
  (0..N).map{ |x|
    dist = input.map{ |c| (x - c[0]).abs + (y - c[1]).abs }
    minDist, closeId = dist.each_with_index.min
    isUniq = dist.count(minDist) == 1
    isUniq ? closeId : -1
  }
}

counts = distMap.flatten.each_with_object(
  Array.new(input.size, 0)
) {|id, acc| acc[id] += 1 }

edges = []
distMap.each_with_index{ |row, y| 
  row.each_with_index{ |id, x| 
    edges << id if ((x == 0 || x == N || y == 0 || y == N) && id >= 0)
  }
}

p counts.select.with_index {|_, i| !edges.include?(i) }.max

# Part 2

distTotalMap = (0..N).map{ |y|
  (0..N).map{ |x|
    dist = input.map{ |c| (x - c[0]).abs + (y - c[1]).abs }
    dist.inject(&:+)
  }
}
p distTotalMap.flatten.select{ |e| e < 10000 }.size
