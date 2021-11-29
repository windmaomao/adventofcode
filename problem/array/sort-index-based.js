const sort = (arr, order) => {
	const swap = (i, j) => {
		if (i == j) return
		const tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
	}
	
	let i = 0
	order.forEach(ov => {
		for (let j = i; j < arr.length; j++) {
			if (ov === arr[j]) {
				swap(i, j)
				i++
			}
		}
	})
	
	
	return arr
}

console.log(sort([1,0,0,-1,-1,0,1,1], [0, 1,-1]))