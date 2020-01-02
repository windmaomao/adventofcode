fn = open("2018/input/01")
input = fn.each_line.map(&:to_i)

# Part 1
puts input.inject(:+)

# Part 2
freqs = {}
total = 0

loop do 
  i = input.shift
  total += i
  break if freqs[total]

  freqs[total] = true
  input << i
end 

p total