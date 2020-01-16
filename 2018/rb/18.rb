fn = open("2018/input/18a")
input = fn.each_line.map(&:chomp).freeze

n = input.size
list = ([" " * n] + input + [" " * n]).map{|l|
  " #{l} "
}.join()

n2 = n + 2

nbs = [-1-n2,-n2,1-n2,1,1+n2,n2,-1+n2,-1]

x, y = [1, 1]
sto = list.dup
while (y <= n)
  i = y * n2 + x
  sour = nbs.map{|v| list[i+v]}

  c = list[i]
  tc = sour.count('|')
  lc = sour.count('#')
  sto[i] = '|' if (c == '.') && (tc >= 3)
  sto[i] = '#' if (c == '|') && (lc >= 3)
  sto[i] = '.' if (c == '#') && (tc < 1 || lc < 1)

  x += 1
  if (x > n) then x, y = [1, y + 1] end
end

list = sto
puts list.scan(/.{#{n2}}/)