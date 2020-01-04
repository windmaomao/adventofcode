fn = open("2018/input/05")
input = fn.each_line.map(&:chomp)[0].freeze
# input = "dabAcCaCBAcCcaDA".freeze

def squeeze!(list)
  ("a".."z").each { |c| 
    list.gsub!("#{c}#{c.upcase}", "")
    list.gsub!("#{c.upcase}#{c}", "")
  }
end

def reduct(list)
  loop do 
    size = list.size
    squeeze!(list)
    break if size == list.size
  end
  list.size
end

# Part 1
p reduct(input.dup)

# Part 2
p ("a".."z").map{|c| 
  reduct(input.gsub(/#{c}/i, ""))
}.min