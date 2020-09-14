package org.adventofcode

import org.junit.Assert
import org.junit.Test

class Day11Test {
  private val d: Day11 = Day11()
  private val str = "vzbxkghb"

  @Test
  fun day11Passwords() {
    Assert.assertEquals("ay", d.nextPassword("ax"))
    Assert.assertEquals("ba", d.nextPassword("az"))
  }

  @Test
  fun day11RightPassword() {
    Assert.assertEquals(true, d.rightPassword("abbcdeffg"))
  }

  @Test
  fun day11part1() {
    Assert.assertEquals("xxx", d.part1(str))
  }

}