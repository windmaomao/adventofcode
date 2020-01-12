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
  }
}


puts carts 
