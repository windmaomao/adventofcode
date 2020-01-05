fn = open("2018/input/08")
# input = fn.each_line.map(&:chomp)[0].split(" ")
input = "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2".split(" ").map(&:to_i)

i = 0
stack = []
values = []

while i < input.size
  node = [input[i], input[i+1]]
  stack << node
  i += 2

  loop do
    p stack
    break if stack.size < 1
    curr = stack.last
    curr[0] -= 1
    break if curr[0] >= 0
    index, count = stack.pop
    values += input[i, count]
    i += count
  end
end

p values.inject(&:+)