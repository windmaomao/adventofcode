function* fib(i) {
	if (i < 3) return
	
	if (i >= 2) {
		yield* fib(i-2)
	}
	if (i >= 1) {
		yield* fib(i-1)
	}
	
	if (m[i]) {
	} else {
		m[i] = m[i-2] + m[i-1]
	}
	yield m[i]
} 

const n = 6
const m = new Array(n).fill(0)
m[1] = 1
m[2] = 1
for (i of fib(n)) {
	console.log(i)
}
console.log(m)