
def matchNum(n) 
  chars = n.to_s.chars
  isInc = chars == chars.sort
  return isInc unless isInc  

  isAdj = n.to_s =~ /(.)\1/
  return isAdj
end

def matchNum2(n)
  chars = n.to_s.chars
  chars.chunk{ |x| x }.any?{ |_, arr| 
    arr.size == 2
  }
end

n1 = 367479
n2 = 893698
filtered = (n1..n2).filter{|n| matchNum(n)}
p filtered.size
p filtered.filter{|n| matchNum2(n)}.size