
N = 9
players = Array.new(9, 0)
curr = 0
marble = 0
marbles = [0]

while marble < 22
  marble += 1
  i = (curr + 1) % marbles.size
  marbles[i, 1] = [marbles[i], marble]
  curr = i + 1
end

p marble % N
p marbles.map.with_index{|v, i| " #{v}" + ((i == curr) ? ")" : "")}.join
