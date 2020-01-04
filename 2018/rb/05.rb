input = "dabAcCaCBAcCcaDA".chars

def react(list)
  i = 0
  while i < list.size - 1
    if (list[i].ord - list[i+1].ord).abs == 32
      list[i, 2] = []
      i = 0
    else
      i += 1
    end
  end
  list
end

p react(input.dup).size