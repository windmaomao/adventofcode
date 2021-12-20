const { log } = console

function minCoinChanges(coins, total) {
	const memo = { 0: 0 }
	
	const visit = (target) => {
		let smallest = Infinity
		if (memo[target] != undefined) {
			smallest = memo[target]
		} else {
			coins.filter(c => target >= c).forEach(c => {
				smallest = Math.min(
					smallest,
					visit(target - c) + 1
				)
				console.log(target, c, target - c, smallest)
			})
			memo[target] = smallest
		}
		
		return smallest
	}
	
	const res = visit(total)
//console.log(memo)
	return res == Infinity
}

console.log(minCoinChanges([1,5], 6))
//console.log(minCoinChanges([1,5,6,9], 11))
//console.log(minCoinChanges([1,2,5,10,20,50], 65))
//console.log(minCoinChanges([2,4], 7))