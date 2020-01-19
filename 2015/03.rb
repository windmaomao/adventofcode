fn = open("2015/03.input")
input = fn.each_line.to_a[0].freeze

# Part 1
houses = Hash.new(0)
p = [0,0]
houses[p] = 1
input.each_char{ |c| 
  case c
  when '^'; p[1] -= 1
  when 'v'; p[1] += 1
  when '<'; p[0] -= 1
  when '>'; p[0] += 1
  end
  houses[p] += 1
}
p houses.size