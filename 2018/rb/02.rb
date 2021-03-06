fn = open("2018/input/02")
input = fn.each_line.map(&:chomp)
# input = ["abcdef", "bababc", "abbcde", "abcccd", "aabcdd", "abcdee", "ababab"]

# Part 1
def matches(str)
  groups = str.each_char.to_a.group_by{ |c| c }
  groups.values.group_by{ |arr| arr.size }
end

numMatches = input.map{ |str| matches(str) }
n2 = numMatches.count{ |n| n[2] }
n3 = numMatches.count{ |n| n[3] }
p n2*n3

# Part 2
def emptyChar(str, i)
  a = str.dup
  a[i] = ' '
  a
end

def findDup(arr)
  h = Hash.new(0)
  arr.find { |each| (h[each] += 1) == 2 } # => 'the"
end

(0..26).each{ |i| 
  list = input.map{ |str| emptyChar(str, i) }
  dupp = findDup(list)
  p dupp if dupp
}