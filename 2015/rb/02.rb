fn = open("2015/02.input")
input = fn.each_line.map{|l| 
  l.split('x').map(&:to_i) 
}.freeze

# Part 1
p input.map{|box| 
  l, w, h = box
  2*l*w + 2*w*h + 2*h*l + l*w*h/box.max
}.sum

# Part 2
p input.map{|box| 
  l, w, h = box
  2*(l+w+h-box.max) + l*w*h
}.sum
