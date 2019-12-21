require_relative 'utils/intcode'

VERBOSE = ARGV.delete('-v')

input = (ARGV[0]&.include?(?,) ? ARGV[0] : ARGF.read).split(?,).map(&method(:Integer)).freeze
ic = Intcode.new(input)

def run(ic, script)
  ic = ic.dup.continue(input: script.chars.map(&:ord))
  big, small = ic.output.partition { |x| x > 127 }
  puts small.map(&:chr).join if VERBOSE
  puts big
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