require 'digest/md5'

fn = open("2015/04.input")
input = fn.each_line.to_a[0].freeze

def findNum(secret, n)
  i = 0
  zeros = "0" * n
  loop do 
    md = Digest::MD5.hexdigest("#{secret}#{i}")
    break if md[0, n] == zeros
    i += 1
  end
  i
end

# Part 1
p findNum(input, 5)

# Part 2
p findNum(input, 6)
