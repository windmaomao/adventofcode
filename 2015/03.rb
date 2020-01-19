fn = open("2015/03.input")
input = fn.each_line.to_a[0].freeze

def visits(str, h)
  x, y = [0,0]
  h[[x, y]] = 1
  str.each_char{ |c| 
    case c
    when '^'; y -= 1
    when 'v'; y += 1
    when '<'; x -= 1
    when '>'; x += 1
    end
    h[[x, y]] += 1
  }
  h
end

# Part 1
h1 = Hash.new(0)
p visits(input, h1).size

# # Part 2
str = input.each_char.to_a
odd = str.select.each_with_index { |_, i| i.odd? }.join('')
even = str.select.each_with_index { |_, i| i.even? }.join('')
h2 = Hash.new(0)
visits(odd, h2)
p visits(even, h2).size