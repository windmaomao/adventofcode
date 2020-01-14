def genRecipes(n, goal)
  recipes = Array.new(n*1.5)
  recipes[0, 2] = [3, 7]
  r1 = 0
  r2 = 1
  rcount = 2
  i = 0
  found = false
  if (goal) 
    latest = Array.new(goal.size, 0) 
  end

  while ((i < n) && !found)
    sum = recipes[r1] + recipes[r2]
    if sum > 9
      recipes[rcount] = 1
      rcount += 1
      if goal
        latest << 1
        latest.shift
        found = latest == goal
      end
    end

    recipes[rcount] = sum % 10
    rcount += 1
    if goal 
      latest << sum % 10
      latest.shift
      found = !found ? latest == goal : found 
    end

    r1 = (r1 + 1 + recipes[r1]) % rcount
    r2 = (r2 + 1 + recipes[r2]) % rcount

    i += 1
  end  

  [recipes, rcount, found]
end


input = 920831
# Part 1
N = input
rs, count = genRecipes(N, nil)
p [N..N+9].map{|i| rs[i]}.join('')

# Part 2
N2 = 16000000
G = input.to_s.chars.map(&:to_i)
rs, count, found = genRecipes(N2, G)
p found ? count - G.size - 1 : nil