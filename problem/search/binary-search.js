function search(arr, v) {
	let left = 0, right = arr.length - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (arr[mid] == v) return mid
		
		if (v < arr[mid]) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}

console.log(search([1,2,3,6,9], 9))

function binarySearch(arr, value) {
	const findIndex = (low, high) => {
		if (low > high) return -1
		const mid = Math.floor((low+high)/2)
		console.log(low, high, mid)
		if (arr[mid] == value) return mid
		
		const parts = [[low, mid-1], [mid+1, high]]
		for ([l, h] of parts) {
			const found = findIndex(l, h)
			if (found >= 0) return found
		}
		
		return -1
	}
	
	return findIndex(0, arr.length - 1)
}

console.log(binarySearch([0,1,2,3,6,9], 0))
