require_relative 'utils/intcode'

input = ARGF.read.split(?,).map(&:to_i)

def run(mem, noun, verb)
  src = mem.dup
  src[1, 2] = [noun, verb]
  Intcode
    .new(src, valid_ops: [1, 2, 99])
    .continue
    .memory[0]
end

puts run(input, 12, 2)
puts run(input, 62, 55)