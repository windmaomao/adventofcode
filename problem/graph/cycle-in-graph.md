# Cycle in Graph

You're given a list of edges representing an unweighted, directed graph with at least one node. Write a function that returns a boolean representing whether the given graph contains a cycle.

```
  edges = [[1,3], [2,3,4], [0], [], [2,5], []] -> true 
  1) 0->1->2->0
  2) 0->1->4->2->0
  ...
```

## Code
```javascript
function cycleInGraph(edges) {	
	function hasCycle(path) {
		const node = path[0]
		const nodes = edges[node]
		for (let i = 0; i < nodes.length; i++) {
			if (path.includes(nodes[i])) return true
			if (hasCycle([nodes[i], ...path]))	return true		
		}
		return false
	}
	
	return edges.map((_, i) => hasCycle([i])).some(v => v)
}
```
