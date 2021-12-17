function search(arr, v) {
	let left = 0, right = arr.length - 1
	
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (arr[mid] == v) return mid
		
		if (arr[mid] >= arr[left]) {
			if (v < arr[mid] && v >= arr[left]) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			if (v > arr[mid] && v <= arr[right]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	
	return -1
}

console.log(search([6,9,1,2,3,6], 9))