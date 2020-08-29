package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day07Test {
  private val d: Day07 = Day07()

  @Test
  fun day07Graph() {
    val g = Graph()
    g.depends("b", "a")
    assertEquals(listOf("b", "a"), g.tsort("a"))
    g.depends("c", "b")
    g.depends("d", "b")
    assertEquals(listOf("c", "d", "b"), g.tsort("b"))
    assertEquals(listOf("c", "d", "b", "a"), g.tsort("a"))
    g.depends("e", "a")
    assertEquals(listOf("c", "d", "b", "e", "a"), g.tsort("a"))
  }

}