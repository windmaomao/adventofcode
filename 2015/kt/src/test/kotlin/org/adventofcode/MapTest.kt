package org.adventofcode

import org.junit.Assert
import org.junit.Test

class MapTest {
  private val t: Map = Map()

  @Test
  fun treeAddNode() {
    t.addNode("a")
    Assert.assertEquals(listOf("a"), t.getNodes())
    t.addNode("b")
    Assert.assertEquals(listOf("a", "b"), t.getNodes())
    t.addNode("c")
    Assert.assertEquals(listOf("a", "b", "c"), t.getNodes())
  }

  @Test
  fun treeAddEdge() {
    t.addEdge("a", "b")
    Assert.assertEquals(listOf("a", "b"), t.getNodes())
    t.addEdge("a", "c")
    Assert.assertEquals(listOf("a", "b", "c"), t.getNodes())
  }

  /**
   *   -> f
   * a -> c -> d
   *        -> b -> e
   */
  @Test
  fun treeGetBFSNodes() {
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
  fun treeGetBFSNodesCycle() {
    t.addEdge("a", "c")
    t.addEdge("a", "f")
    t.addEdge("c", "d")
    t.addEdge("c", "b")
    t.addEdge("b", "a")
    Assert.assertEquals(
      listOf("a", "c", "f","b", "d"),
      t.getBFSNodes("a")
    )
  }

  @Test
  fun treeGetDFSNodes() {
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
  fun treeGetDFSNodesCycle() {
    t.addEdge("a", "c")
    t.addEdge("a", "f")
    t.addEdge("c", "d")
    t.addEdge("c", "b")
    t.addEdge("b", "a")
    Assert.assertEquals(
      listOf("a", "c", "b", "d", "f"),
      t.getDFSNodes("a")
    )
  }

  @Test
  fun treeGetTSortNodes() {
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

  @Test
  fun treeGetTSortNodesCycle() {
    t.addEdge("a", "c")
    t.addEdge("a", "f")
    t.addEdge("c", "d")
    t.addEdge("c", "b")
    t.addEdge("b", "a")
    Assert.assertEquals(
      listOf("b", "d", "c", "f", "a"),
      t.getTSortNodes("a")
    )
  }
}