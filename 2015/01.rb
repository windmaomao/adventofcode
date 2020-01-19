fn = open("2015/01.input")
input = fn.each_line.to_a[0].freeze

# Part 1
p input.count("(") - input.count(")")

# Part 2
i = 0
floor = 0
while i < input.size
  floor += 1 if input[i] == "("
  floor -= 1 if input[i] == ")"
  i += 1
  break if floor == -1
end
p i