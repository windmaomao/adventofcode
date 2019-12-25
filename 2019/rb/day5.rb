require_relative 'utils/intcode'

fn = open("2019/inputs/day5.data")

def run(mem, input, ops) 
  b = Intcode.new(mem, valid_ops: ops)
  b.continue(input: input)
  b.output
end

input = fn.read.split(?,).map(&:to_i)
puts run(input, 1, [1,2,3,4,99])[-1]
puts run(input, 5, [1,2,3,4,5,6,7,8,99])[-1]
