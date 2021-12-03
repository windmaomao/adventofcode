//Graph({ 1: [2], 2: [3] })
//Graph(n => [2])
//g.dfs(1, console.log)
const Graph = (adjFn) => {
	// neighbours for each node
	const neighbours = node => 
		(typeof adjFn === 'function' 
			? adjFn(node) 
			: adjFn[node]
		) || []
	
	// traverse from src node
	//    visiting nodes on the way
	// src - starting node
	// cb - callback for node visit
	// options.visited - visited nodes to start
	// options.nextCb - callback for the next node
	// options.method - travase method, 'dfs' or 'bfs'
	const traverse = (src, cb, { 
		visited, nextCb, method
	} = {}) => {
		const marked = visited || {}
		const queue = [src]
		const nextQueued = method === 'bfs'
			? q => q.shift() : q => q.pop()
		
		
		let node
		while (
			(node = nextQueued(queue)) != undefined
			&& !marked[node]
		) {
			marked[node] = true
			cb && cb(node)
			for (const next of neighbours(node)) {
				nextCb && nextCb(next, node, !!marked[node])
				if (!marked[next]) queue.push(next)
			}
		}
		
		return marked
	}
	
	const dfs = (src, cb, options = {}) => {
		traverse(src, cb, options)
	}
	
	// check cycle with dfs
	const cycle = (src, cb) => {
		let hasCycle = false
		traverse(src, cb, { nextCb: (v, p, visited) => {
			if (visited) {
				if (v != p) hasCycle = true
			}
		}})
		return hasCycle
	}	
	
	return { 
		neighbours, 
		traverse, dfs,
		cycle, 
	}
}

module.exports = Graph

//const g = Graph({0: [1], 1: [2], 3: [4], 4: [5]})
//g.dfs(0, null, console.log)
//console.log(g.cycle(5))
//const g = Graph({0: [1, 3], 1: [2], 3: [4], 4: [5]})
//g.bfs(0, console.log)