const fib = (n) => {
	if (n <= 1) return 0
	if (n <= 3) return 1
	
	return fib(n - 1) + fib(n - 2)
}

const m = {}
const fibWithCache = n => {
	if (m[n] === undefined) m[n] = fib(n)

	return m[n]
}

console.log(fibWithCache(6))

