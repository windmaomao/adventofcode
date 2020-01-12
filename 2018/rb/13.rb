fn = open("2018/input/13a")
input = fn.each_line.map(&:chomp).freeze

carts = []
symbols = ['<', '>', '^', 'v']
input.each_with_index{|l, y|
  l.chars.each_with_index{|c, x| 
    dir = symbols.index(c)
    next if dir == nil
    carts << [x, y, dir, 0]
    l[x] = dir > 1 ? '|' : '-'
  }
}

# Part 1
def move(cart, m)
  x, y, d, s = cart
  c = m[y][x]

  # change direction at intersection 
  dirs = [[3,0,2], [2,1,3], [0,2,1], [1,3,0]]
  if (c == '+')
    d = dirs[d][s]
    s += 1
    s %= 3
    # s = s / 3 
  end

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
  moves[c][d] + [s]
end

i = 0
crash = []
N = 15
while i < 15
  tracks = input.dup.map{|c| c.dup }
  carts.each{|c| 
    x, y, d, s = move(c, input)
    c[0, 4] = [x, y, d, s]
    tracks[y][x] = symbols[d]
  }
  h = Hash.new(0)
  crash = carts.find { |c| (h[[c[0],c[1]]] += 1) == 2 }
  break if crash

  i += 1
end

puts tracks
p crash[0, 2]
