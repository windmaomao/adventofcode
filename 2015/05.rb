fn = open("2015/05.input")
input = fn.each_line.map(&:chomp)

def found(str)
  return false if str =~ /ab|cd|pq|xy/
  return false unless str =~ /([a-z])\1/
  return str.scan(/[aeiou]/).count > 2
end

p input.map{|l| found(l)}.count(true)