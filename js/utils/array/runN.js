const runN = (arr, fn, init, until = () => false) => {
	let re = 0, acc = init, done = false, d = arr.length
	const is = new Array(d).fill(0)
	
	while (re < 1 && !done) {
		
		value = is.map((k, j) => {
			const dn = arr[j].length
			if (dn < 1) return undefined
			return arr[j][k]
		})
		
		acc = fn(acc, value, is, arr)
		done = until(acc, value, is, arr)
		if (done) continue
		
		let j = d - 1
		re = 1
		while (j >=0 && re > 0) {
			const dn = arr[j].length
			if (dn < 1) { j--; continue }
			is[j]++
			if (is[j] == arr[j].length) {
				is[j] = 0
				j--
			} else {
				re--
			}
		}
	}
	return [acc, is]
}

module.exports = runN

//console.log(runN(
//	[ [ 0, 1, 2, 3, 4, 5 ], [ 0, 1, 2, 3, 4, 5 ] ],
//	acc => acc + 1, 0,
//	acc => false
//))