const Graph = require('./graph')
const dfsCycle = require('./dfs-cycle')

const hasSingleCycle = (array) => {
	const n = array.length
	
	const edges = array.map((v, i) => {
		let j = (i + v) % n
		if (j < 0) j += n
		if (j >= n) j -= n
		return [i, j]
	}).filter(([i, j]) => i !== j)
	
	const g = Graph(edges)
	const c = dfsCycle(g)
	
	return c.components
}

//console.log(hasSingleCycle([2,3,1,-4,-4,2]))
//console.log(hasSingleCycle([0,1,1,1,1]))
//console.log(hasSingleCycle([1,1,0,1,1]))
console.log(hasSingleCycle([1,1,1,1,2]))