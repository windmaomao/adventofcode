package org.adventofcode

import java.util.Queue
import java.util.LinkedList

class Tree() {
  val edges: HashMap<String, HashMap<String, Int>> = hashMapOf()

  fun addNode(a: String): HashMap<String, Int> {
    var es = edges.get(a)
    if (es == null) {
      es = hashMapOf()
      edges.put(a, es)
    }
    return es
  }

  fun getNodes(): List<String> = edges.keys.toList()

  fun addEdge(a: String, b: String, weight: Int = 0) {
    addNode(b)
    addNode(a).put(b, weight)
  }

  fun bfs(node: String, visit: (String) -> Unit) {
    val keys = edges[node]?.keys
    keys?.forEach { visit(it) }
    keys?.forEach { bfs(it, visit) }
  }

  fun toNodes(
    root: String,
    fn: (String, (String) -> Unit) -> Unit
  ): List<String> {
    val res: MutableSet<String> = mutableSetOf()
    fn(root) { node -> res.add(node) }
    return res.toList()
  }

  fun getBFSNodes(root: String): List<String> {
    val res: MutableSet<String> = mutableSetOf(root)
    bfs(root) { node -> res.add(node) }
    return res.toList()
  }

  fun dfsPre(node: String, visit: (String) -> Unit) {
    visit(node)
    edges[node]?.keys?.forEach { s -> dfsPre(s, visit) }
  }

  fun dfsPost(node: String, visit: (String) -> Unit) {
    edges[node]?.keys?.forEach { s -> dfsPost(s, visit) }
    visit(node)
  }

  fun getDFSNodes(root: String) = toNodes(root, ::dfsPre)
  fun getTSortNodes(root: String) = toNodes(root, ::dfsPost)
}