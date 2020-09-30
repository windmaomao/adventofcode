require_relative "scan"

def floor(c) c == '(' ? 1 : -1 end

def part1(ops) ops.sum end

def part2(ops) ops
  .scan(0, &:+)
  .find_index(-1)
end
