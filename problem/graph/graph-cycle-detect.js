function cycleInGraph(edges) {
	const visit = u => {
		marked[u] = true
		stack[u] = true
		
		edges[u].forEach(v => {
			if (!marked[v]) {
				visit(v)
			} else if (stack[v]) {
				hasCycle = true
			}
		})
		
		stack[u] = false
	}
	
	const marked = {}
	const stack = {}
	let hasCycle = false
	
	for (let i = 0; i < edges.length; i++) {
		if (!marked[i]) visit(i)
	}
	
	return hasCycle
}

console.log(cycleInGraph([
	[1,3],
	[2,3,4],
	[0],
	[],
	[2,5],
	[]
]))

console.log(cycleInGraph([
	[],
	[0,3],
	[0],
	[1,2],
]))