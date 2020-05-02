import Graph from './ja/data-structures/graph/Graph'
import GraphVertex from './ja/data-structures/graph/GraphVertex'
import GraphEdge from './ja/data-structures/graph/GraphEdge'
import topologicalSort from './ja/algorithms/graph/topological-sorting/topologicalSort'

const graph = (list) => {
  const g = new Graph(true)
  const nodes = {}

  Object.keys(list).forEach(k => {
    nodes[k] = new GraphVertex(k)
    g.addVertex(nodes[k])
  })

  Object.keys(list).forEach(k => {
    const node = nodes[k]
    const deps = list[k]
    deps.forEach(k2 => {
      const edge = new GraphEdge(node, nodes[k2])
      g.addEdge(edge)
    })
  })

  return {
    toString: () => g.toString(),
    tsort: () => topologicalSort(g).map(v => v.value).reverse(),
  }
}

export default graph


