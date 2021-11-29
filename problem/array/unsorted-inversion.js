//const arr = [3,4,1,2] // 4
const arr = [2,3,3,1,9,5,6] // 1+2+1+1

const merge = (l, m, h) => {
	let c = 0
	for (let i = l; i <= m; i++) {
		for (let j = m + 1; j <= h; j++) {
			if (arr[i] > arr[j]) c++
		}
	}
	return c
}

const count = (l, h) => {
	let c = 0
	if (h == l) return c
	if (h == l+1) return arr[l] > arr[h] ? 1 : 0

	if (l < h) {
		const m = Math.floor((l + h) / 2)
		c += count(l, m)
		c += count(m + 1, h)
		c += merge(l, m, h)
	}
	return c
}

console.log('arr:', arr)
console.log('inversions:', count(0, arr.length - 1))

