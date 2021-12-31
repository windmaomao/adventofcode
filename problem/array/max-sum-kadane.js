function kadanesAlgorithm(arr) {
	let s = 0, res = -Infinity
	for (let i = 0; i < arr.length; i++) {
		s += arr[i]
		if (arr[i] >= s) {
			s = arr[i]
		}
		console.log(arr[i], s)
		res = Math.max(res, s)
	}
	
	return res
}

console.log(kadanesAlgorithm([3,5,-9,1]))