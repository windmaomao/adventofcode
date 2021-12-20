function maximizeExpression(array) {
	const n = array.length
	const choices = new Array(n).fill(0).map((_, i) => i)
	const value = arr => {
		const v = i => array[i]
		const [a, b, c, d] = arr
		return v(a) - v(b) + v(c) - v(d)
	}
	
	// taken array return max value
	const visit = (arr) => {
		let res = -Infinity
		const an = arr.length
		
		if (an == 4) {
			res = Math.max(value(arr), res)
		} else {
			const prev = an ? arr[an - 1] : -1
			const nexts = choices.filter(i => i > prev)
			nexts.map(i => {
				const next = visit([...arr, i])
				res = Math.max(next, res)
			})
		}
		
		return res
	}
	
	const r = visit([])
	return r == -Infinity ? 0 : r
}

//console.log(maximizeExpression([0,1,2]))
console.log(maximizeExpression([3,6,1,-3,2,7]))