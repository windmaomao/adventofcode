def genRecipes(n, goal)
  recipes = Array.new(n*1.5)
  recipes[0, 2] = [3, 7]
  r1, r2, rcount = [0, 1, 2]
  i = 0
  latest = goal ? Array.new(goal.size, 0) : nil

  while (i < n)
    sum = recipes[r1] + recipes[r2]
    if sum > 9
      recipes[rcount] = 1
      rcount += 1
      if goal
        latest << 1
        latest.shift
        break if latest == goal
      end
    end

    recipes[rcount] = sum % 10
    rcount += 1
    if goal 
      latest << sum % 10
      latest.shift
      break if latest == goal
    end

    r1 = (r1 + 1 + recipes[r1]) % rcount
    r2 = (r2 + 1 + recipes[r2]) % rcount

    i += 1
  end  

  [recipes, rcount, latest]
end


input = 920831
# Part 1
N = input
rs, count = genRecipes(N, nil)
p [N..N+9].map{|i| rs[i]}.join('')

# Part 2
N2 = 16000000
G = input.to_s.chars.map(&:to_i)
rs, count, latest = genRecipes(N2, G)
p count - G.size, latest