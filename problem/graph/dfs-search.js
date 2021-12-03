const Graph = require('./graph')

const dfsFrom = (g, src) => {
	const vertices = []
	const from = {}
	const marked = g.traverse(src, v => {
		vertices.push(`${v}`)
	}, { nextCb: (v, w, visited) => {
		if (!visited) from[w] = v
	}})
	
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

const g = Graph({0: [1, 3], 1: [2], 3: [4], 4: [5]})
const p = dfsFrom(g, 0)
console.log(p.hasVisited(5))
console.log(p.vertices)
//console.log(p.pathTo(5))