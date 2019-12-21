require_relative 'utils/intcode'

input = ARGF.read.split(?,).map(&:to_i)
ic = Intcode.new(input)

def run(ic, script)
  ic = ic.dup.continue(input: script.chars.map(&:ord))
  damage = ic.output[-1]
  message = ic.output[0..-2].map(&:chr).join
  puts message
  puts damage
end

# (!A | !C) & D
# (!A | !B | !C) & D
run(ic, <<CODE)
NOT C J
NOT A T
OR T J
NOT B T
OR T J
AND D J
WALK
CODE

# !A | !B | (!C & H) & D
# (!A || !B || !C) && D && (E || H)
run(ic, <<CODE)
NOT C T
AND H T
NOT A J
OR T J
NOT B T
OR T J
AND D J
RUN
CODE