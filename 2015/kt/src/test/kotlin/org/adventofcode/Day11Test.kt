package org.adventofcode

import org.junit.Assert
import org.junit.Test

class Day11Test {
  private val d: Day11 = Day11()

  @Test
  fun day11Passwords() {
    val seq = d.genPasswordSeq("ab").take(1).toList()
    Assert.assertEquals("ac", seq[0])

  }

}