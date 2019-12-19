require_relative 'utils/intcode'

input = ARGF.read.split(?,).map(&:to_i)

def run(mem, noun, verb)
  mem[1] = noun
  mem[2] = verb
  b = Intcode.new(mem, valid_ops: [1, 2, 99])
  b.continue
  return b.memory[0]
end

puts run(input, 12, 2)
puts run(input, 62, 55)