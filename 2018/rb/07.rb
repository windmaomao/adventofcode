fn = open("2018/input/07a")
input = fn.each_line.map(&:chomp).freeze

Steps = Hash.new { |h, k| h[k] = {
  "children" => [],
  "parents" => []
}}

input.each{ |l| 
  p, c = l[5], l[36]
  Steps[p]['children'] << c
  Steps[c]['parents'] << p
}

roots = Steps.select{ |k, v| v['parents'].empty? }.keys

# Part 1

def findOrders(start)
  orders = []
  stack = start.dup

  loop do
    node = stack.sort.find{ |n| 
      parents = Steps[n]['parents']
      parents.size ? parents.all?{|c| orders.include?(c) } : true
    }
    if node
      stack.delete(node) 
      orders << node
      stack += Steps[node]['children']
      stack = stack.uniq
    end
    break if stack.size < 1
  end
  
  orders
end

p findOrders(roots)
