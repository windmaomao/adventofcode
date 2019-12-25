require_relative 'utils/intcode'

fn = open("2019/inputs/day2.data")

input = fn.read.split(?,).map(&:to_i)

def run(mem, noun, verb)
  src = mem.dup
  src[1, 2] = [noun, verb]
  Intcode
    .new(src, valid_ops: [1, 2, 99])
    .continue
    .memory[0]
end

p run(input, 12, 2)
p run(input, 62, 55)