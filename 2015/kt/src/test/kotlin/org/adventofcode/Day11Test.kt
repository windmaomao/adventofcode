package org.adventofcode

import org.junit.Assert
import org.junit.Test

class Day11Test {
  private val d: Day11 = Day11()

  @Test
  fun day11Passwords() {
    Assert.assertEquals(
      listOf("ay", "az", "b`", "ba"),
      d.genPasswordSeq("ax").take(4).toList()
    )

  }

}