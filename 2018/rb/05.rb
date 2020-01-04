fn = open("2018/input/05")
input = fn.each_line.map(&:chomp)[0].bytes.to_a.freeze
# input = "dabAcCaCBAcCcaDA".bytes.to_a.freeze

C = 32
def reduct(list)
  i = 0
  while i < list.size - 1
    dif = list[i] - list[i+1]
    if dif == C || dif == -C
      list[i, 2] = []
      i = 0
    else
      i += 1
    end
  end
  list.size
end

# Part 1
# p reduct(input.dup)

# Part 2
lens = ("A".."Z").to_a.map(&:ord).map{|o| 
  remove = input.dup.select{ |c| (c != o && c!= o + C )}
  reduced = reduct(remove)
  p "#{o.chr} #{reduced}"
  reduced
}

p lens.min