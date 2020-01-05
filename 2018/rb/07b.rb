fn = open("2018/input/07a")
input = fn.each_line.map(&:chomp).freeze

Deps = input.each_with_object(
  Hash.new { |h, k| h[k] = []}
){ |l, acc| 
  p, c = l[5], l[36]
  acc[p] ||= []
  acc[c] << p
  acc[c].sort!
}

def noDepList(order)
  Deps.select{ |k, v| v & order == v}.keys
end 

# Part 1
order = []
loop do
  order << (noDepList(order) - order).sort.first
  break if order.size == Deps.size
end
p order