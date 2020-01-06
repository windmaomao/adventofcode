N = 428 #428
M = 72061 #72061*3
players = Array.new(N, 0)
marbles = Array.new(M, 0)
curr = 0
marble = 0
size = 1

def insert(arr, size, i, v)
  if (i < size)
    size.downto(i+1) { |j| arr[j] = arr[j-1] }
  end
  arr[i] = v
  [size + 1, i]
end

def remove(arr, size, i)
  if (i < size - 1)
    (i..size-2).each { |j| arr[j] = arr[j+1] }
  end
  [size - 1, i]
end

while marble < M
  marble += 1
  if (marble % 23 == 0)
    i = (curr - 7) % size
    players[marble % N] += marble + marbles[i]
    size, curr = remove(marbles, size, i)
  else
    i = (curr + 1) % size
    size, curr = insert(marbles, size, i+1, marble)
  end
  # print '.' if marble % 100000 == 0
end

# p marble % N
# p marbles.map.with_index{|v, i| " #{v}" + ((i == curr) ? ")" : "")}.join
p players.max
