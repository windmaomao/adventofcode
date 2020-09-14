package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day12Test {
  private val d: Day12 = Day12()

  @Test
  fun day12Passwords() {
    assertEquals(6, d.sum("[1,2,3]"))
    assertEquals(6, d.sum("""{"a":2,"b":4}"""))
    assertEquals(3, d.sum("[[[3]]]"))
    assertEquals(3, d.sum("""{"a":{"b":4},"c":-1}"""))
//    assertEquals(0, d.sum("""{"a":[-1,1]}"""))
//    assertEquals(0, d.sum("""[-1,{"a":1}]"""))
  }
}