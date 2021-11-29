const treeTopologies = n => {
	if (n < 2) return 1
	
	let count = 0
	const taken = []
	
	const visit = (nodes, k) => {
		if (k == n) {
			console.log(taken)
			count++
			return
		}
		
		for (const i of nodes) {
			if (i <= taken[taken.length - 1]) continue
			taken.push(i)
			const nodes2 = nodes.filter(v => v != i)
			nodes2.push(2*i + 1)
			nodes2.push(2*i + 2)
			visit(nodes2, k + 1)
			taken.pop()
		}
		
	}
	
	visit([0], 0)
	
	return count
}

console.log(treeTopologies(4))

//      i
// 2*i+1  2*i+2