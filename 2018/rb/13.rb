fn = open("2018/input/13a")
input = fn.each_line.map(&:chomp).freeze

carts = []
symbols = ['<', '>', '^', 'v']
input.each_with_index{|l, y|
  l.chars.each_with_index{|c, x| 
    dir = symbols.index(c)
    next if dir == nil
    carts << [[x, y], dir, 0]
    l[x] = dir > 1 ? '|' : '-'
  }
}

# Part 1
def move(cart, m)
  (x, y), d = cart
  c = m[y][x]
  # p c,d
  normals = [[x-1,y,d], [x+1,y,d], [x,y-1,d], [x,y+1,d]]  # - or |
  lefts =   [[x,y+1,3], [x,y-1,2], [x+1,y,1], [x-1,y,0]]  # /
  rights =  [[x,y-1,2], [x,y+1,3], [x-1,y,0], [x+1,y,1]]  # \
  moves = {
    '-' => normals,
    '|' => normals,
    '+' => normals,
    "/" => lefts,
    "\\" => rights,
  }
  moves[c][d]
end

i = 0
while i < 1
  tracks = input.dup.map{|c| c.dup }
  carts.each{|c| 
    x, y, d = move(c, input)
    tracks[y][x] = symbols[d]
    c[0, 2] = [[x, y], d]
  }

  i += 1
end

puts tracks
