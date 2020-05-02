import Graph from './ja/data-structures/graph/Graph'
import GraphVertex from './ja/data-structures/graph/GraphVertex'
// import GraphVertex from 'javascript-algorithms-and-data-structures/src/data-structures/graph/GraphVertex'
// import topologicalSort from 'javascript-algorithms-and-data-structures/src/algorithms/graph/topological-sorting/topologicalSort'

const graph = () => {
  const g = new Graph()
  const vertexA = new GraphVertex('A')
  g
    .addVertex(vertexA)
  
  return g.toString() 
}

export default graph


