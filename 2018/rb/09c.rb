
N = 30
M = 5807
players = Array.new(N, 0)
curr = 0
marble = 0
marbles = [0]

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
    # marbles[i, 1] = [marbles[i], marble]
    curr = i + 1
  end
  print '.' if marble % 100000 == 0
end

# p marble % N
# p marbles.map.with_index{|v, i| " #{v}" + ((i == curr) ? ")" : "")}.join
p players.max
