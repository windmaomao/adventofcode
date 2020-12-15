fn = open("../res/15.input")
arr = fn.first.split(',').map(&:to_i)

def part(arr, max)
	cache = Array.new(max*2) { |i| -1 }
	
	n = 0
	i = 0
	while i < arr.length
		n = arr[i]
		cache[n*2] = i
		i += 1
	end
	
	while i < max
		n = (cache[n*2+1] >= 0) ? cache[n*2] - cache[n*2+1] : 0
		cache[n*2+1], cache[n*2] = cache[n*2], i
		i += 1
	end

	return n
end

p part(arr, 2020)
p part(arr, 30000000)
