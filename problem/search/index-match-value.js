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

function indexEqualsValue(arr) {
	const res = arr.map((v,i) => v - i)
	
	return lower(res, 0)
}

//console.log(lower([-5,-4,-2,0,0,0,3], 0))
//console.log(indexEqualsValue([-5,-3,0,3,4,5,9]))
console.log(indexEqualsValue([-5,-3,0,2,3,4,6]))