fn = open("2018/input/08")
input = fn.each_line.map(&:chomp)[0].split(" ").map(&:to_i)
# input = "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2".split(" ").map(&:to_i)

i = 0
stack = []
value = 0
values = []

while i < input.size
  node = [input[i], input[i+1], []]
  stack << node
  i += 2

  loop do
    # p stack
    break if stack.size < 1
    curr = stack.last
    curr[0] -= 1
    break if curr[0] >= 0

    # update the node meta
    _, metaCount, children = stack.pop
    
    value = 0
    childCount = children.size
    if (childCount > 0)
      (1..metaCount).each { |j| 
        index = input[i + j - 1] - 1
        value += index < childCount ? children[index] : 0
      }
    else
      value = input[i, metaCount].inject(&:+)
    end
    values += input[i, metaCount]

    if (stack.last)
      stack.last[2] << value
    end

    i += metaCount
  end
end

# Part 1
p values.inject(&:+)
# Part 2
p value