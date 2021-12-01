const Graph = (edges) => {
	const adj = {}

	for (const [x, y] of edges) {
		adj[x] = adj[x] || []
		adj[x].push(`${y}`)
	}
	
	const vertices = Object.keys(adj)
	const V = vertices.length
	const E = edges.length
	
	return { vertices, adj, V, E }
}

module.exports = Graph

//const g = Graph([[1,2], [2,1], [1,3]])
//console.log(g)
