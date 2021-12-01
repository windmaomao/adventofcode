const Graph = require('./graph')

const dfsCycle = (g) => {
	let marked = {}
	let hasCycle = false
	const components = []
	
	const dfs = (v, p) => {
		marked[v] = true
		for (const w of (g.adj[v] || [])) {
			if (!marked[w]) {
				dfs(w, v)
			} else {
				if (w != p) hasCycle = true
			}
		}
	}
	
	g.vertices.forEach(v => {
		if (!marked[v]) {
			marked = {}
			dfs(v, v)
			components.push(Object.keys(marked))
		}
	})
	
	return { hasCycle, components }
}

module.exports = dfsCycle

//const g = Graph([[0,1], [1,2], [3,4], [4,0]])
//console.log(dfsCycle(g))
