const indexes = (ns) => {
	const d = ns.length
	if (d == 2) {
		const [m, n] = ns
		const arr = new Array(m * n).fill(0)
		let i = 0, j = 0
		return arr.map(_ => {
			const v = [i, j]
			j++
			if (j == n) { j = 0; i++ }
			return v
		})		
	}
	if (d == 3) {
		const [m, n, o] = ns
		const arr = new Array(m * n * o).fill(0)
		let i = 0, j = 0, k = 0
		return arr.map(_ => {
			const v = [i, j, k]
			k++
			if (k == o) { 
				k = 0; j++
				if (j == n) {
					j = 0; i++
				}
			}
			return v
		})		
	}
	return []
}

module.exports = indexes

//const a = indexes([1, 2, 5])
//console.log(a)