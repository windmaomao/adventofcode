def fuel(mass)
  mass / 3 - 2
end

def totalFuel(mass) 
  if mass < 0
    return 0
  end
  f = fuel(mass) 
  return f + totalFuel(f)
end

input = ARGF.each_line.map(&:to_i)
puts input.sum(&method(:fuel))
puts input.sum(&method(:totalFuel))
