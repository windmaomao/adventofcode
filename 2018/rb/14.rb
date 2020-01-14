def genRecipes(n, goal)
  recipes = Array.new(n*1.5)
  recipes[0, 2] = [3, 7]
  r1 = 0
  r2 = 1
  rcount = 2
  i = 0
  found = false

  while ((i < n) && !found)
    sum = recipes[r1] + recipes[r2]
    if sum > 9
      recipes[rcount] = 1
      rcount += 1
    end

    recipes[rcount] = sum % 10
    rcount += 1
    # using recipes[range] is really slow
    found = goal && (
      [
        recipes[rcount-6], recipes[rcount-5],
        recipes[rcount-4], recipes[rcount-3],
        recipes[rcount-2], recipes[rcount-1]
      ] == goal
    )

    r1 = (r1 + 1 + recipes[r1]) % rcount
    r2 = (r2 + 1 + recipes[r2]) % rcount

    i += 1
  end  

  [recipes, rcount]
end


input = 920831
# Part 1
N = input
rs, count = genRecipes(N, nil)
p [N..N+9].map{|i| rs[i]}.join('')

# Part 2
G = input.chars.map(&:to_i)
rs, count = genRecipes(N, G)
p count