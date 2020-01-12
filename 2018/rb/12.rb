fn = open("2018/input/12a")
input = fn.each_line.map(&:chomp)
raw = input.shift(2)[0][15..].freeze
rules = input.map{|l| 
  l.split(" => ")
}.freeze

def findIndex(str, target)
  sz = target.size
  (0..str.size-sz).select { |i| str[i,sz] == target }
end

# Part 1
chars = ['.', '#']
str = "..." + raw.dup + "............."
Neg = -3
i = 0
while i < 20
  p "#{i}, #{str}"
  modifies = [[], []]
  rules.each{ |pattern, char| 
    charIndex = char == '#' ? 1 : 0 
    modifies[charIndex] += findIndex(str, pattern).map{|i| i+2}
  }
  # p modifies.map{ |m| m.sort }
  str2 = "." * str.size
  modifies.each_with_index{ |m, j|
    m.each{ |k| str2[k] = chars[j] }
  }
  str = str2
  i += 1
end
p "#{i}, #{str}"
p str.chars.map.with_index{|c, i| 
  c == '#' ? i + Neg : 0
}.inject(&:+)
