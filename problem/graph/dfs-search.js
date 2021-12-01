const Graph = require('./graph')

const dfsFrom = (g, src) => {
	const marked = {}
	const vertices = []
	const from = {}
	
	const dfs = (v) => {
		marked[v] = true
		vertices.push(`${v}`)
		for (const w of (g.adj[v] || [])) {
			if (!marked[w]) {
				from[w] = v
				dfs(w)
			}
		}
	}
	
	dfs(src)
	const visits = Object.keys(marked)
	const hasVisited = v => !!marked[v]
	const pathTo = v => {
		if (!marked[v]) return null
		const path = []
		for (let x = v; x != src; x = from[x]) {
			path.unshift(`${x}`)
		}
		return path
	}
	
	return { visits, hasVisited, vertices, pathTo }
}

const g = Graph([[0,2], [2,1], [2,3], [3,4], [3,5]])
const p = dfsFrom(g, 0)
console.log(p.hasVisited(5))
console.log(p.vertices)
console.log(p.pathTo(5))