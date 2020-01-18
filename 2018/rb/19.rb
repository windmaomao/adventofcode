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

arr = [0,0,0,0,0,0]
j = 0
while arr[ip] < input.size
  data = input[arr[ip]]
  arr = opcode(arr, data)
  arr[ip] += 1
  j += 1
end

p arr