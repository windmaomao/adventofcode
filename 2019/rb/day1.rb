def fuel(mass)
  mass / 3 - 2
end

def totalFuel(mass) 
  return 0  if mass < 0
  f = fuel(mass) 
  return f + totalFuel(f)
end

input = ARGF.each_line.map(&:to_i)

puts input.map{|n| fuel(n)}.sum
puts input.map{|n| totalFuel(n)}.sum

# puts input.sum(&method(:fuel))
# puts input.sum(&method(:totalFuel))

