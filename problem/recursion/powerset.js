const powerset = (array) => {
	const n = array.length
	const res = []
	
	const visit = (curr, i) => {
		if (i == n) return
		
		res.push(curr.map(j => array[j]))
		
		let k = i + 1
		while (k < n) {
			visit([...curr, k], k)
			k++
		}
	}
	
	visit([], -1)
	console.log(res)
}

powerset([1,2,3])