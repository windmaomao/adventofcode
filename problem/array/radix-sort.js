const sort = (arr) => {
	const n = arr.length
	if (n < 2) return arr
	
	const strs = arr.map(v => 
		`${v}`.split('').reverse().map(s => parseInt(s))
	)
	const sn = strs.reduce((c, s) => Math.max(c, s.length), 0)
	
	const sortByDigit = (list, i) => {
		const m = new Array(10).fill(0).map(_ => [])
		
		for (const str of list) {
			m[str[i] || 0].push(str)
		}

		return m.reduce((acc, a) => {
			return acc.concat(a)
		}, [])
	}
	
	let sorted = strs
	for (let j = 0; j < sn; j++) {
		sorted = sortByDigit(sorted, j)
	}
	
	return sorted.map(d => parseInt(d.reverse().join('')))
}

console.log(sort([121,1,432,23,564,45,788]))