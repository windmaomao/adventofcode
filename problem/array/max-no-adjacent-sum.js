function maxNoAdjacentSum(arr) {
	const n = arr.length
	const m = {}

	const max = (i) => {
		if (i < 0) return 0
		
		if (m[i] == null)
			m[i] = Math.max(
				max(i-1),
				max(i-2) + arr[i]
			)

		return m[i]
	}
	
	return max(arr.length - 1)
}

console.log(maxNoAdjacentSum([75,105,120,75,90,135]))
//														75,105,195,195,285,