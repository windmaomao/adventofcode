function minNumberOfJumps(arr) {
	const n = arr.length
	const nums = new Array(n).fill(Infinity)
	
	nums[0] = 0
	for (let i = 0; i < n-1; i++) {
		for (let j = 0; j <= arr[i]; j++) {
			const k = i + j
			if (k >= n) continue
			nums[k] = Math.min(nums[k], nums[i] + 1)
		}
	}
	
	return nums[n-1]
}

console.log(minNumberOfJumps([3,4,2,1,2,3,7,1,1,1,3]))
