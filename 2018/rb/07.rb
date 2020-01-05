fn = open("2018/input/07")
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

orders = []
while orders.size < Deps.size
  orders << (noDepList(orders) - orders).sort.first
end
p orders.join

# Part 2

Prefix = 0
N = 5
time = 0
working = Array.new(N).map{|v| ["", 0] }
orders = []

while orders.size < Deps.size
  # no dependency, not in order, not in working
  canWork = noDepList(orders).select{ |v| 
    !orders.include?(v) &&
    !working.map(&:first).include?(v)
  }

  working.each { |w|
    workingOn, _ = w
    if canWork.size > 0 && workingOn == ""
      order = canWork.sort.first
      canWork.delete(order)
      w[0, 2] = [order, order.ord - 4 - Prefix]
    end
  }

  time += 1

  working.each { |w|
    workingOn, timeLeft = w
    next if workingOn == ""

    timeLeft -= 1
    if (timeLeft == 0)
      orders << workingOn
      w[0, 2] = ["", 0]
    else
      w[0, 2] = [workingOn, timeLeft]
    end
  }

end
p time