function twoEdgeConnectedGraph(edges) {
	const adjs = {}
	edges.forEach((es, u) => {
		adjs[u] = es
	})
	
	const visited = {}
	const tin = {}
	const low = {}
	let timer = 0
	let hasBridge = false
	
	const _tin = v => tin[v] === undefined ? -1 : tin[v]
	const _low = v => low[v] === undefined ? -1 : low[v]
	
	const dfs = (v, p) => {
		visited[v] = true
		tin[v] = low[v] = timer++
		
		adjs[v].forEach(to => {
			if (to == p) return
			if (!visited[to]) {
				dfs(to, v)
				low[v] = Math.min(_low(v), _low(to))
				if (low[to] > tin[v]) {
					hasBridge = true
				}
			} else {
				low[v] = Math.min(_low(v), _tin(to))
			}
		})
	}
	
	let components = 0
	edges.forEach((_, i) => {
		if (!visited[i]) {
			components++
			dfs(i, -1)
		}
	})
	
	return [low, tin, !hasBridge && components < 2]
}

console.log(twoEdgeConnectedGraph([
	[1, 2, 5],
	[0, 2],
	[0, 1, 3],
	[2, 4, 5],
	[3, 5],
	[0, 3, 4]
]))

console.log(twoEdgeConnectedGraph([
	[1],
	[0, 2, 3],
	[1, 3],
	[1, 2]
]))

console.log(twoEdgeConnectedGraph([
	[],
	[],
]))