function swap(arr, i, j) {
	const tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}

function partition(arr, low, high) {
	let i = low, j = high + 1
	const v = arr[low]
	
	while (true) {
		while (arr[++i] < v) {
			if (i == high) break;
		}
		while (arr[--j] >= v) {
			if (j == low) break;
		} 
		if (i >= j) break;
		
		swap(arr, i, j)
	}
	swap(arr, low, j)
	
	return j
}

function quickselect(arr, kk) {
	const k = kk - 1
	const sort = (low, high) => {
		if (low >= high) return
		const j = partition(arr, low, high)
		console.log(j, arr)
		const i = low + j
		if (k == i) return
		if (k < i) sort(low, j - 1)
		if (k > i) sort(j + 1, high)
	}

	sort(0, arr.length - 1)
	return arr[k]
}


console.log(quickselect([8,5,2,9,7,6,3], 3))

//console.log(partition([8,5,2,9,7,6,3], 6, 6))