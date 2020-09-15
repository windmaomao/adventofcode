package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day14Test {
  private val d: Day14 = Day14()
//  val lines = parseFile("13")

  @Test
  fun day14PosSeq() {
    assertEquals(
      listOf(0, 1, 2, 2, 2, 3, 4),
      d.posSeq(1, 2, 2).take(7).toList()
    )
    assertEquals(
      listOf(0, 1, 2, 3, 3, 4, 5),
      d.posSeq(1, 3, 1).take(7).toList()
    )
    assertEquals(
      listOf(0, 2, 2, 2, 4, 4, 4),
      d.posSeq(2, 1, 2).take(7).toList()
    )
  }


}