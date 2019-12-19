require_relative 'utils/intcode'

input = ARGF.read.split(?,).map(&:to_i)

def run(mem, input, ops) 
  b = Intcode.new(mem, valid_ops: ops)
  b.continue(input: input)
  b.output
end

puts run(input, 1, [1,2,3,4,99])[-1]
puts run(input, 5, [1,2,3,4,5,6,7,8,99])[-1]
