function* gen() {
	const n = 5
	const arr = new Array(n).fill(0)
	for (let i = 0; i < n; i++) {
		arr[i] = i
		yield arr
	}
}

const g = gen()

let res
while (!(res = g.next()).done) {
	console.log(res.value)
}
