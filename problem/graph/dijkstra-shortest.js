const adjs = {
	0: { 2: .26, 4: .38 },
	1: { 3: .29 },
	2: { 7: .34 },
	3: { 6: .52 },
	4: { 7: .37, 5: .35 },
	5: { 1: .32, 7: .28, 4: .35 },
	6: { 4: .93, 0: .58 , 2: .40 },
	7: { 3: .39, 5: .28 }
}

const dijkstra = (src) => {
	const edgeTo = {}
	const distTo = {}
	const pq = {}
	
	Object.keys(adjs).forEach(i => {
		distTo[i] = Infinity
	})
	distTo[src] = 0.0

	pq[src] = 0.0
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
	}
	
	console.log(distTo)
}

dijkstra(0)