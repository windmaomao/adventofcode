function cycleCheck(arr) {
	const n = arr.length
	
	const visit = i => {
		console.log(i)
		if (k == n) {
			if (i != 0) hasCycle = false
			return
		}
		k++
		
		if (m[i] != null) hasCycle = false
		
		m[i] = true
		let j = (i + arr[i]) % n
		if (j < 0) j += n
		visit(j)
	}
	
	const m = {}
	let hasCycle = true
	let k = 0
	visit(0)
	return hasCycle
}

//console.log(cycleCheck([2,3,1,-4,-4,2]))
//console.log(cycleCheck([2,2,-1]))
console.log(cycleCheck([2,2,2]))
