# Before: [3, 3, 2, 1]  arr
# 9 3 2 2               data
# After:  [3, 3, 1, 1]  output
fn = open("2018/input/16")
input = fn.each_line.map(&:chomp).freeze

samples = input.each_slice(4).map{|c|
  arr = c[0].scan(/\d+/).map(&:to_i)
  data = c[1].scan(/\d+/).map(&:to_i)
  output = c[2].scan(/\d+/).map(&:to_i)
  [arr, data, output]
}

def opcode(arr, data, op)
  output = arr.dup
  _, a, b, c = data
  case op
  when 0 #'addr'
    output[c] = arr[a] + arr[b]
  when 1 #'addi'
    output[c] = arr[a] + b
  when 2 #'mulr'
    output[c] = arr[a] * arr[b]
  when 3 #'muli'
    output[c] = arr[a] * b
  when 4 #'banr'
    output[c] = arr[a] & arr[b]
  when 5 #'bnai'
    output[c] = arr[a] & b
  when 6 #'borr'
    output[c] = arr[a] | arr[b]
  when 7 #'bori'
    output[c] = arr[a] | b
  when 8 #'setr'
    output[c] = arr[a]
  when 9 #'seti'
    output[c] = a
  when 10 #'gtir'
    output[c] = a > arr[b] ? 1 : 0
  when 11 #'gtri'
    output[c] = arr[a] > b ? 1 : 0
  when 12 #'gtrr'
    output[c] = arr[a] > arr[b] ? 1 : 0
  when 13 #'eqir'
    output[c] = a == arr[b] ? 1 : 0
  when 14 #'eqri'
    output[c] = arr[a] == b ? 1 : 0
  when 15 #'eqrr'
    output[c] = arr[a] == arr[b] ? 1 : 0
  end
  output
end

# Part 1
p samples.map{|g| 
  arr, data, output = g
  (0..15).map{|i| 
    opcode(arr, data, i) == output
  }.count(true) >= 3
}.count(true)

# Part 2
ops = Array.new(16).map{|v| [] }
samples.each{|g| 
  arr, data, output = g
  op = data[0]
  (0..15).each{|i| 
    if opcode(arr, data, i) == output
      ops[op] << i
    end
  }
}

ops = ops.map{|arr| arr.uniq}
pids = Array.new(16, -1)

loop do
  fid = ops.index{ |arr| arr.size == 1 }
  break if fid == nil
  n = ops[fid][0]
  pids[fid] = n
  ops.each{ |arr|
    arr.delete_if { |x| x == n }
  }
end

p pids
p ops

# arr = [3, 2, 1, 1]
# data = [9, 2, 1, 2]
# output = [3, 2, 2, 1]
# p (0..15).map{|i| 
#   opcode(arr, data, i) == output
# }.count(true)