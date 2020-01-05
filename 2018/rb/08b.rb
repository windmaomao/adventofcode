fn = open("2018/input/08")
input = fn.each_line.map(&:chomp)[0].split(" ").map(&:to_i).freeze
# input = "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2".split(" ").map(&:to_i)

# Part 1

def nav(list)
  childCount = list.shift
  metaCount = list.shift
  # p [childCount, metaCount]

  sum = 0
  childCount.times { |i| sum += nav(list) }
  metaCount.times { |i| sum += list.shift }
  sum
end
p nav(input.dup)

# Part 2

def nav2(list)
  childCount = list.shift
  metaCount = list.shift

  sum = 0
  if childCount > 0
    sums = [nil]
    childCount.times { sums << nav2(list) }
    metaCount.times { sum += sums[list.shift] || 0 }
  else 
    metaCount.times { sum += list.shift }
  end
  sum
end
p nav2(input.dup)
