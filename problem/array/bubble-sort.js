const sort = (arr) => {
	const n = arr.length
	if (n < 2) return arr
	
	const swap = (i, j) => {
		const tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
	}
	
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j+1]) {
				swap(j, j+1)
				console.log(arr)
			}
		}
	}
	
	
	return arr
}

console.log(sort([-2,45,0,11,-9]))