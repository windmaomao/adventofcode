package org.adventofcode

class Graph {
  private val tree: HashMap<String, String> =
    HashMap<String, String>()

  fun depends(child: String, parent: String) {
    if (!tree.containsKey(parent)) {
      tree.put(parent, "");
    }
    tree.put(child, parent);
  }

  // Topological sort
  fun tsort(root: String): List<String> {
    val list: ArrayList<String> = arrayListOf()
    tree
      .filterValues { it == root }
      .forEach { (key, _) ->
        list.addAll(tsort(key))
      }
    list.add(root)
    return list
  }
}

class Day07(name: String = "07"): Day(name) {
}