function nonChange(coins) {
	const n = coins.length
	const nextChange = (start, i) => {
		let res = start
		if (i < n) {
			if (coins[i] <= start + 1) {
				return nextChange(start + coins[i], i + 1) 
			} 
		}
		return res + 1
	}
	
	return nextChange(0, 0)
}

console.log(nonChange([1,1,2,3,5,7,22]))