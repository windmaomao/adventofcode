require_relative 'utils/intcode'
require 'set'

input = ARGF.read.split(?,).map(&:to_i)

def run(mem, origin_white: false) 
  pos = [0, 0]
  dir = [-1, 0]
  on_white = origin_white
  visited = Set.new

  b = Intcode.new(mem)

  until b.halted?
    b.continue(input: on_white ? 1 : 0)
    color, turn = b.output.shift(2)

    puts color
    on_white = color
  end
end

run(input)

