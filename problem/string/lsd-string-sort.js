function countSort(arr, r, key) {
	const n = arr.length
	const count = new Array(r).fill(0)
	
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

function lsdSort(arr) {
	const n = arr.length
	const r = 256
	const w = arr[0].length
	let res = arr
	
	for (let d = w - 1; d >= 0; d--) {
		const key = str => str.charCodeAt(d)
		res = countSort(res, r, key)
	}
	
	return res
}

//console.log(lsdSort(['a','e','d', 'z', 'b']))
console.log(lsdSort([
	'4PGC938',
	'2IYE230',
	'3CI0720',
	'1ICK750',
	'1OHV845',
	'4JZY524',
	'1ICK750',
	'3CIO720',
	'10HV845',
	'10HV845',
	'2RLA629',
	'2RLA629',
	'3ATW723'
]))

console.log('10lg10', '10*255')