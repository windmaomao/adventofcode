def display(r, f1, f2)
  r.map.with_index { |n, i|
    case i
    when f1
      "(#{n})"
    when f2 
      "[#{n}]"
    else
      " #{n} "
    end
  }.join
end

N = 2018 #920831 
B = 10
recipes = Array.new(N+B)
recipes[0, 2] = [3, 7]
r1 = 0
r2 = 1
rcount = 2
i = 0

while i < N+B 
  rs = [r1, r2].map{|i| recipes[i]}
  rs.inject(&:+).to_s.chars.map(&:to_i).each{|v| 
    recipes[rcount] = v
    rcount += 1
  }
  r1, r2 = [r1,r2].map{|i| (i+1+recipes[i]) % rcount }
  i += 1
  # p display(recipes, r1, r2) # + "  " + i.to_s
end

# Part 1
p [N..N+9].map{|i| recipes[i]}.join('')