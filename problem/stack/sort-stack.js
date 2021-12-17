const Stack = (s) => ({
	arr: s || [],
	push: function(v) { this.arr.push(v) },
	pop: function() { return this.arr.pop() },
	empty: function() { return this.arr.length === 0 },
	size: function() { return this.arr.length },
	peek: function() { return this.arr[this.arr.length - 1] }
})

const { log } = console

function sortStack(stack) {
	const sorted = Stack()
	
	while (!stack.empty()) {
		const v = stack.pop()
		if (sorted.empty() || v > sorted.peek()) {
			sorted.push(v)
		} else {
			while (!sorted.empty() && v < sorted.peek()) {
				stack.push(sorted.pop())
			}
			sorted.push(v)
		}
		log(stack.arr, sorted.arr)
	}
	
	return sorted.arr
}

log(sortStack(Stack([-5,2,-2,4,3,1])))