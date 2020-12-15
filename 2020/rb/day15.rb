fn = open("../res/15.input")
arr = fn.first.split(',').map(&:to_i)

def part(arr, max)
	cache = Hash.new([])
	
	n = 0
	i = 0
	while i < arr.length
		n = arr[i]
		cache[n] = [i]
		i += 1
	end
	
	while i < max
		n = cache[n][1] ? cache[n][0] - cache[n][1] : 0
		cache[n] = [] if !cache.key?(n)
		cache[n][1], cache[n][0] = cache[n][0], i
		i += 1
	end

	return n
end

p part(arr, 2020)
p part(arr, 30000000)
