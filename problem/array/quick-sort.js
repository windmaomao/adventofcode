const arr = [5,3,2,6,4,1,3,7]

const partition = (l, h) => {
	const m = Math.floor((h + l) / 2)
	const pivot = arr[m]
	let tmp
	
	let i = l - 1
	let j = h + 1

	while (true) {
		do { i++ } while (arr[i] < pivot)
		do { j-- } while (arr[j] > pivot)
				
		if (i >= j) return j
		
		tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
	}
}

const sort = (l, h) => {
	if (l < h && l >= 0 && h >= 0) {
		const p = partition(l, h)
		sort(l, p)
		sort(p + 1, h)
	}
}

console.log('arr:', arr)
sort(0, arr.length - 1)
console.log('arr:', arr)

