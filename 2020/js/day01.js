const read = require('./read.js')
const arr = read('01')

function part1(arr, target) {
	const m = {}
	for (const i of arr) {
		m[i] = true
		const k = target - i
		if (m[k]) return [i, k]
	}
	return []
}

console.log(part1(arr, 2020))
