fn = open("2018/input/04")
input = fn.each_line.map(&:chomp).map(&:freeze).freeze

def lastInt(l)
  Integer(l.scan(/\d+/).last, 10)
end

chunks = input.sort.slice_before{ |l| 
  l.end_with?('begins shift') 
}.to_a

N = 60
guards = Hash.new { |h, k| h[k] = Array.new(N, 0) }
chunks.each{ |arr| 
  guard = lastInt(arr[0])
  arr.each_cons(2) { |p| 
    if p[0].end_with?('falls asleep')
      i, j = p.map{|l| Integer(l.scan(/\d+/).last, 10)}
      (i..j-1).each{|k| guards[guard][k] += 1}
    end
  }
}

# Part 1
guardId, minutes = guards.max_by{|k, v| v.sum }
high, minuteId = minutes.each_with_index.max
p guardId * minuteId

# Part 2
guardId, minutes = guards.max_by{|k, v| v.max }
high, minuteId = minutes.each_with_index.max
p guardId * minuteId


# def printGuard(i, g)
#   p i, g.map{|x| x > 0 ? '#' : '.'}.join('')
# end
# guards.each{ |k, v| printGuard(k, v) }