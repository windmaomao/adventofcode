package org.adventofcode

import org.junit.Assert
import org.junit.Test

class TreeTest {
  val t: Tree = Tree()

  @Test
  fun TreeAddNode() {
    t.addNode("a")
    Assert.assertEquals(listOf("a"), t.getNodes())
    t.addNode("b")
    Assert.assertEquals(listOf("a", "b"), t.getNodes())
    t.addNode("c")
    Assert.assertEquals(listOf("a", "b", "c"), t.getNodes())
  }

  @Test
  fun TreeAddEdge() {
    t.addEdge("a", "b")
    Assert.assertEquals(listOf("a", "b"), t.getNodes())
    t.addEdge("a", "c")
    Assert.assertEquals(listOf("a", "b", "c"), t.getNodes())
  }

  @Test
  fun TreeGetBFSNodes() {
    t.addEdge("a", "c")
    t.addEdge("a", "f")
    t.addEdge("c", "d")
    t.addEdge("c", "b")
    t.addEdge("b", "e")
    Assert.assertEquals(
      listOf("a", "c", "f","b", "d", "e"),
      t.getBFSNodes("a")
    )
  }

  @Test
  fun TreeGetDFSNodes() {
    t.addEdge("a", "c")
    t.addEdge("a", "f")
    t.addEdge("c", "d")
    t.addEdge("c", "b")
    t.addEdge("b", "e")
    Assert.assertEquals(
      listOf("a", "c", "b", "e", "d", "f"),
      t.getDFSNodes("a")
    )
  }

  @Test
  fun TreeGetTSortNodes() {
    t.addEdge("a", "c")
    t.addEdge("a", "f")
    t.addEdge("c", "d")
    t.addEdge("c", "b")
    t.addEdge("b", "e")
    Assert.assertEquals(
      listOf("e", "b", "d", "c", "f", "a"),
      t.getTSortNodes("a")
    )
  }
}