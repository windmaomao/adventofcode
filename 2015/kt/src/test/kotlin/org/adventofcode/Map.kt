package org.adventofcode

fun bfs(
  root: String,
  nexts: (String) -> List<String>,
  visit: (String) -> Unit
) {
  visit(root)

  val ns = nexts(root)
  ns.forEach { visit(it) }
  ns.forEach { bfs(it, nexts, visit) }
}

fun dfs(
  root: String,
  nexts: (String) -> List<String>,
  visit: (String) -> Unit
) {
  visit(root)
  nexts(root).forEach { dfs(it, nexts, visit) }
}

fun tsort(
  node: String,
  reserve: (String) -> Boolean,
  nexts: (String) -> List<String>,
  visit: (String) -> Unit
) {
  if (!reserve(node)) return
  nexts(node).forEach { tsort(it, reserve, nexts, visit) }
  visit(node)
}

fun dijkstra(
  node: String,
  value: Int,
  nexts: (String) -> List<Pair<String, Int>>,
  visit: (String, String, Int) -> Unit
) {
  nexts(node).forEach { (to, weight) ->
    visit(to, node, value + weight)
  }
}

class Map() {
  val edges: HashMap<String, HashMap<String, Int>> = hashMapOf()

  fun getNodes(): List<String> = edges.keys.toList()

  fun addNode(a: String): HashMap<String, Int> {
    var es = edges.get(a)
    if (es == null) {
      es = hashMapOf()
      edges.put(a, es)
    }
    return es
  }

  fun addEdge(a: String, b: String, weight: Int = 0) {
    addNode(b)
    addNode(a).put(b, weight)
  }

  /*
   * From the root node following a visitor function,
   * visit each node without duplicate,
   * and return the list of nodes
   */
  fun visitNodes(
    root: String,
    visitor: (
      root: String,
      nexts: (String) -> List<String>,
      visit: (String) -> Unit
    ) -> Unit
  ): List<String> {
    val visited: MutableSet<String> = mutableSetOf()
    visitor(root, { node ->
      edges[node]?.keys?.filter {
        !visited.contains(it)
      }?.toList() ?: listOf()
    }) { node ->
      visited.add(node)
    }
    return visited.toList()
  }

  /*
   * From the root node following a visitor function,
   * reserve nodes to be visited until ready,
   * and visit them without duplicate,
   * and return the list of nodes
   */
  fun visitReservedNodes(
    root: String,
    visitor: (
      node: String,
      reserve: (String) -> Boolean,
      nexts: (String) -> List<String>,
      visit: (String) -> Unit
    ) -> Unit
  ): List<String> {
    val visited: MutableSet<String> = mutableSetOf()
    val tested: MutableSet<String> = mutableSetOf()
    visitor(root, { node ->
      tested.add(node)
    }, { node ->
      edges[node]?.keys?.filter {
        !visited.contains(it) &&
        !tested.contains(it)
      }?.toList() ?: listOf()
    }) { node ->
      visited.add(node)
    }
    return visited.toList()
  }

  fun visitShortestNodes(
    root: String,
    visitor: (
      node: String,
      value: Int,
      nexts: (String) -> List<Pair<String, Int>>,
      visit: (String, String, Int) -> Unit
    ) -> Unit
  ): List<String> {
    val breadcrumbs: HashMap<String, Pair<String, Int>> = hashMapOf()
    val visited: MutableList<String> = mutableListOf()
    visitor(root, 0, { node ->
      listOf(Pair(node, 0))
    }) { to: String, from: String, cost: Int ->
      breadcrumbs.put(to, Pair(from, cost))
    }
    visited.add(root)
    return visited.toList()
  }

  fun getBFSNodes(root: String) = visitNodes(root, ::bfs)
  fun getDFSNodes(root: String) = visitNodes(root, ::dfs)
  fun getTSortNodes(root: String) = visitReservedNodes(root, ::tsort)
  fun getShortestNodes(root: String) = visitShortestNodes(root, ::dijkstra)
}