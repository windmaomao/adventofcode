function countSort(arr, r, key) {
	const n = arr.length
	const count = new Array(r).fill(0)
	
	const sort = () => {
		const aux = new Array(n).fill(0)
		
		for (let i = 0; i < n; i++) {
			count[key(arr[i]) + 1]++
		}
		
		for (let k = 0; k < r; k++) {
			count[k+1] += count[k]
		}
		
		for (let i = 0; i < n; i++) {
			aux[count[key(arr[i])]++] = arr[i]
		}

		return aux
	}
	
	return sort()
}

const m = { 
	an: 2, 
	br: 3, 
	da: 2,
	ga: 4,
	ha: 1,
	ja: 3,
	jo: 4,
	ma: 1,
	mi: 2,
	mo: 1
}
const a = Object.keys(m)
const key = k => m[k]

console.log(countSort(a, 5, key))