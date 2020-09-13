package org.adventofcode

data class Dijkstra(val map: Map) {
  val breadcrumbs: HashMap<String, Pair<String, Int>> = hashMapOf()
  val visited: MutableList<String> = mutableListOf()

  private fun goForward(start: String, pcost: Int) {
    map.edges[start]?.forEach { node, cost ->
      breadcrumbs.put(node, Pair(start, pcost + cost))
    }
  }

  private fun nextNode(): Pair<String, Int>? {
    if (breadcrumbs.size == 0) return null

    var found = ""
    var cost = Int.MAX_VALUE
    breadcrumbs
      .filter { m -> visited.indexOf(m.key) < 0 }
      .forEach { (node, pair) ->
        if (pair.second < cost) {
          found = node
          cost = pair.second
        }
      }

    if (cost == Int.MAX_VALUE) return null
    return Pair(found, cost)
  }

  fun findPath(root: String): List<String> {
    val size = map.getNodes().size

//    while (visited.size < size) {
//      val (node, cost) = nextNode(root)
//      goForward(node, cost)
//      visited.add(node)
//    }

    return visited.toList()
  }

}