function maxKnapsack(values, weights, capacity) {
	const n = values.length
	const choices = new Array(n).fill(0).map((_, i) => i)
	const memo = {}
	
	const visit = (weight, itemsTaken) => {
		if (itemsTaken.length == n) {
			return { value: 0, items: [] }
		}
		
		let value = 0, items = []
		const key = `${weight}:` 
		  + [...itemsTaken].sort().join(',')

		if (memo[key] !== undefined) {
			return memo[key]
		} else {
			choices.forEach(i => {
				if (itemsTaken.indexOf(i) >= 0) return
				const nextWeight = weight - weights[i]
				if (nextWeight < 0) return
				
				const next = visit(nextWeight, [...itemsTaken, i])
				const nextValue = next.value + values[i]
				if (nextValue > value) {
					value = nextValue
					items = [...next.items, i]
				}
			})
			memo[key] = { value, items }
			console.log(value, '<-', key)
			return memo[key]
		}
		
	}
	
	return visit(capacity, [])
}

console.log(maxKnapsack([1,4,5,6], [2,3,6,7], 10))