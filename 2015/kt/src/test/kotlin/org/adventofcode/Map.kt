package org.adventofcode

import java.util.Queue
import java.util.LinkedList

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
   * Given the starting node and a visitor function
   * visit each node and return the list of nodes
   */
  fun toNodes(
    root: String,
    fn: (String, (String) -> Boolean) -> Unit
  ): List<String> {
    val res: MutableSet<String> = mutableSetOf()
    fn(root) { node -> res.add(node) }
    return res.toList()
  }

  fun toNodes2(
    root: String,
    fn: (String, (String) -> Boolean, (String) -> Boolean) -> Unit
  ): List<String> {
    val visited: MutableSet<String> = mutableSetOf()
    val tested: MutableSet<String> = mutableSetOf()
    fn(root, { node ->
      tested.add(node)
    }) { node ->
      visited.add(node)
    }
    return visited.toList()
  }

  fun bfs(node: String, visit: (String) -> Boolean) {
    visit(node)
    val keys = edges[node]?.keys
    keys
      ?.filter { visit(it) }
      ?.forEach { bfs(it, visit) }
  }

  fun dfsPre(
    node: String,
    test: (String) -> Boolean,
    visit: (String) -> Boolean
  ) {
    if (!test(node)) return
    visit(node)
    edges[node]?.keys?.forEach { s ->
      if (!test(node)) {
        dfsPre(s, test, visit)
      }
    }
  }

  fun dfsPost(
    node: String,
    test: (String) -> Boolean,
    visit: (String) -> Boolean
  ) {
    if (!test(node)) return
    edges[node]?.keys?.forEach { s ->
      if (!test(node)) {
        dfsPost(s, test, visit)
      }
    }
    visit(node)
  }

  fun dijkstra(
    next: () -> Pair<String, Int>?,
    visit: (String, String, Int) -> Boolean
  ) {
    val p = next() ?: return
    val (from, cost) = p
    edges[from]?.forEach { (to, weight) ->
      visit(to, from, cost + weight)
    }
  }

  fun getBFSNodes(root: String) = toNodes(root, ::bfs)
  fun getDFSNodes(root: String) = toNodes2(root, ::dfsPre)
  fun getTSortNodes(root: String) = toNodes2(root, ::dfsPost)
}