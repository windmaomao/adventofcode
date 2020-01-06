p 123

# S = 2694
S = 8

def power(x, y)
  id = x + 10
  n = ((id * y + S) * id).digits
  d = n.size > 2 ? n[2] : 0
  d - 5
end

p power(3, 5)