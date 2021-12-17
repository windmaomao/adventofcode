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