//Graph({ 1: [2], 2: [3] })
//Graph(n => [2])
const Graph = (adjFn) => {
	const neighbours = node => 
		(typeof adjFn === 'function' 
			? adjFn(node) 
			: adjFn[node]
		) || []
	
	const dfs = (src, cb, nextCb) => {
		const marked = {}
		const _dfs = (node, from) => {
			marked[node] = true
			cb && cb(node, from)
			for (const next of neighbours(node)) {
				if (!marked[next]) {
					nextCb && nextCb(next, node)
					_dfs(next, node)
				}
			}
		}
		
		_dfs(src, null)
	}
	
	return { neighbours, dfs }
}

module.exports = Graph

const g = Graph({ 1: [2], 2: [3] })
console.log(g.neighbours(2))
g.dfs(1, console.log)