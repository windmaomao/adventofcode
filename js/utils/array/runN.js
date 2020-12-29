const runN = (arr, fn, init, until = () => false) => {
	let re = 0, acc = init, d = arr.length
	const is = new Array(d).fill(0)
	while (re < 1) {
		acc = fn(acc, is, arr)
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
	return null
}

module.exports = runN

console.log(runN(
	[[1, 2, 3, 4], [2, 3], []],
	(acc, is) => { console.log(is) }, 0,
))