fn = open("2018/input/19")
input = fn.each_line.map(&:chomp)

ip = input.shift.chars.last.to_i

Ops = [
  'addr', 'addi', 'mulr', 'muli',
  'banr', 'bnai', 'borr', 'bori',
  'setr', 'seti',
  'gtir', 'gtri', 'gtrr',
  'eqir', 'eqri', 'eqrr'
]

input = input.map{|l|
  parts = l.split(" ")
  op = Ops.index(parts.shift)
  [op] + parts.map(&:to_i)
}

def opcode(arr, data)
  output = arr.dup
  op, a, b, c = data
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

def spin(input, ip, a)
  arr = a.dup
  while arr[ip] < input.size
    data = input[arr[ip]]
    # r0 = arr[0]
    arr = opcode(arr, data)
    # p arr if arr[0] != r0
    arr[ip] += 1
  end
  arr
end

# Part 1
arr = [0,0,0,0,0,0]
p spin(input, ip, arr)[0]

# Part 2
# register0 is sum of all divisors of 10551347
# [0, 0, 10550400, 34, 10551347, 0]
# [1, 1, 1, 7, 10551347, 10551347]
# arr = [1,0,0,0,0,0]
# p spin(input, ip, arr)[0]
arr = [1, 73, 144539, 10551347]
p arr.sum

# 15285504