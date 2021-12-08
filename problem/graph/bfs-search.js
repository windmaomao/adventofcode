const adjs = { 
	0: [1, 2, 3], 
	2: [4], 
	4: [5], 
	5: [0]
}

const findPath = (src, target) => {
	const parent = {}
	const queue = [src]
	const marked = { [src]: true }
	let found = false
	
	while (queue.length && !found) {
		const u = queue.shift()
		
		const vs = adjs[u] || []
		vs.forEach(v => {
			if (!marked[v]) {
				marked[v] = true
				parent[v] = u
				if (target == v) found = true
				queue.push(v)
			}
		})
	}
	
	let path = false
	if (found) {
		path = []
		for (let x = target; x != src; x = parent[x]) {
			path.push(x)
		}
	}

	return found ? path.reverse() : false
}


console.log(findPath(1, 5))


