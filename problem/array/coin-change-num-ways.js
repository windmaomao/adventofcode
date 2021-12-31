function minCoinChanges(denoms, target) {
	
	const ways = (value, d) => {
		if (value < 0) return 0
		
		let ns = denoms.filter(v => v <= value)
			.map(v => ways(value - v) + 1)
		
//	console.log(value, ns)
		return Math.min(...ns)
	}
	
	return ways(target)
}

//console.log(minCoinChanges([1,5], 6))
console.log(minCoinChanges([1,5,10,25], 10))

// m[6] -> min(m[5]+1, m[1]+1) , 
// m[5] -> min(m[4]+1, m[0]+1) , 2
// m[4] -> m[3]
// m[3] -> m[2]
// m[2] -> m[1]
// m[1] -> 1



// m[0] -> 1
// m[1] -> 1
// m[2] -> 2