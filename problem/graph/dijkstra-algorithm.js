const dijkstra = (adjs, src) => {
	const edgeTo = {}
	const distTo = {}
	const pq = {}
	
	Object.keys(adjs).forEach(i => {
		distTo[i] = Infinity
	})
	distTo[src] = 0.0
	
	pq[src] = 0.0
	let k = 0
	while (Object.keys(pq).length) {
		const s = Object.keys(pq).sort((a, b) => pq[a] - pq[b])
		const u = s[0]
		delete pq[u]
		
		const edges = adjs[u]
		Object.keys(edges).forEach(v => {
			const weight = distTo[u] + edges[v]
			if (weight < distTo[v]) {
				distTo[v] = weight
				edgeTo[v] = u
				pq[v] = weight
			}
		})
		
		k++
	}
	
	return distTo
}

function dijkstrasAlgorithm(start, edges) {
	const adjs = {}
	for (let i = 0; i < edges.length; i++) {
		adjs[i] = {}
		for (const [j, dist] of edges[i]) {
			adjs[i][j] = dist
		}
	}
	
	const dists = dijkstra(adjs, start)
	const res = new Array(edges.length).fill(0)
	for (let i = 0; i < edges.length; i++) {
		res[i] = dists[i] == Infinity ? -1 : dists[i]
	}
	
	return res
}

console.log(dijkstrasAlgorithm(0, [
	[[1,7]],
	[[2,6], [3,20], [4,3]],
	[[3,14]],
	[[4,2]],
	[],
	[]
]))

