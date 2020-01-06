require_relative "utils/node"

N = 428.freeze
M = 72061.freeze
players = Array.new(N, 0)
curr = 0
marble = 0
marbles = [0]

# Part 1

while marble < M
  marble += 1
  if (marble % 23 == 0)
    i = (curr - 7) % marbles.size
    players[marble % N] += marble + marbles[i]
    marbles.delete_at(i)
    curr = i
  else
    i = (curr + 1) % marbles.size
    marbles.insert(i+1, marble)
    curr = i + 1
  end
  print '.' if marble % 100000 == 0
end

# p marble % N
# p marbles.map.with_index{|v, i| " #{v}" + ((i == curr) ? ")" : "")}.join
p players.max

# Part 2

players = Array.new(N, 0)
board = Node.new(0)
current = board
marble = 0

while marble < M * 100
  marble += 1
  if marble % 23 == 0
    player = marble % N
    players[player] += marble
    7.times { current = current.left }
    current, deleted_val = current.delete
    players[player] += deleted_val
  else
    current = current.right
    current = current.append(marble)
  end
end

p players.max
