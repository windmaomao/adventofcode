const maxSumSequence = (arr) => {
	const n = arr.length
	const sums = new Array(n).fill(0)
	const froms = new Array(n).fill(-1)
	let largest = -Infinity
	let largestId = -1
	
	for (let i = 0; i < n; i++) {
		let max = arr[i]
		for (let j = 0; j < i; j++) {
			if (arr[j] < arr[i]) {
				const s = sums[j] + arr[i]
				if (s > max) {
					max = s
					froms[i] = j
				}
			}
		}
		sums[i] = max
		if (max > largest) {
			largest = max
			largestId = i
		}
	}
	console.log(froms, sums)
	
	const res = []
	while (largestId >= 0) {
		res.unshift(arr[largestId])
		largestId = froms[largestId]
	}
	
	return [largest, res]
}

//console.log(maxSumSequence([10,15,4,5,11,14]))
//console.log(maxSumSequence([10, 70, 20, 30, 50, 11, 30]))
//console.log(maxSumSequence([-1]))
console.log(maxSumSequence([10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]))