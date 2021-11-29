const permutation = (array) => {
	const n = array.length
	const res = []
	const units = new Array(n).fill(0).map((_, i) => i)
	
	const visit = (curr) => {
		if (curr.length == n) {
			res.push(curr.map(i => array[i]))
			return 
		}
		
		units.filter(v => curr.indexOf(v) < 0)
		  .forEach(v => { visit([...curr, v]) })
	}
	
	visit([])
	console.log(res)
}

permutation([4,5,6])