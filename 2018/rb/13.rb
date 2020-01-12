fn = open("2018/input/13a")
input = fn.each_line.map(&:chomp).freeze

carts = []
symbols = ['<', '>', '^', 'v']
input.each_with_index{|l, y|
  l.chars.each_with_index{|c, x| 
    found = symbols.index(c)
    next if found == nil
    carts << {
      "pos" => [x, y],
      "dir" => found,
      "count" => 0 
    }
    l[x] = found > 1 ? '|' : '-'
  }
}

# Part 1
def move(p, d)
  x, y = p 
  case d
  when 0
    [x-1, y]
  when 1
    [x+1, y]
  when 2
    [x, y-1]
  when 3
    [x, y+1]
  end
end

i = 0
while i < 1
  tracks = input.dup.map{|c| c.dup }
  carts.each{|c| 
    x, y = move(c['pos'], c['dir'])
    tracks[y][x] = symbols[c['dir']]
  }

  puts tracks
  i += 1
end
