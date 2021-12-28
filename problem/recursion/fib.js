function fib(n) {
	const m = {}
	
	const fn = (i) => {
		if (i == 1) return 0
		if (i < 4) return 1
		
		if (!m[i]) {
			m[i] = fn(i-1) + fn(i-2)
		}
		
		return m[i]
	}
	
	return fn(n)
}

console.log(fib(6))
