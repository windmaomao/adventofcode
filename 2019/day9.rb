require_relative 'utils/intcode'

input = ARGF.read.split(?,).map(&:to_i)

def run(mem, input) 
  b = Intcode.new(mem)
  b.continue(input: input)
  b.output
end

puts run(input, 1)
puts run(input, 2)