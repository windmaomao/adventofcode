function lower(arr, v) {
	let left = 0, right = arr.length - 1
	
	while (left < right) {
		let mid = Math.floor((left + right) / 2)
		
		if (v > arr[mid]) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	
	return arr[left] == v ? left : -1
}

function upper(arr, v) {
	let left = 0, right = arr.length - 1
	
	while (left < right) {
		let mid = Math.floor((left + right + 1) / 2)
		if (v < arr[mid]) {
			right = mid - 1
		} else {
			left = mid
		}
	}
	
	return arr[left] == v ? left : -1
}

console.log(lower([4,4,4,4,4,4,6], 4))