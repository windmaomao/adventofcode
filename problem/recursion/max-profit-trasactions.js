function maxProfit(array, k) {
	const n = array.length
	const choices = new Array(n).fill(0).map((_, i) => i)
	const profit = arr => {
		let t = -1
		return arr.reduce((acc, i) => {
			const v = acc + array[i] * t
			t = -t
			return v
		}, 0)
	}
	
	// upon taken array, return max value
	const visit = arr => {
		let res = profit(arr)
		const an = arr.length
		console.log(arr, res)
		
		if (an != array.length && an < k * 2) {
			const prev = an ? arr[an - 1] : -1
			const nexts = choices.filter(i => i > prev)
			nexts.map(i => {
				const next = visit([...arr, i])
				res = Math.max(next, res)
			})
		}
		
		return res
	}
	
	return visit([])
}

//console.log(maxProfit([0,1,2]))
console.log(maxProfit([5,11,3,50,60,90], 2))