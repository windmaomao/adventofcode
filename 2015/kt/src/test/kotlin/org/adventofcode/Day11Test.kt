package org.adventofcode

import org.junit.Assert
import org.junit.Test

class Day11Test {
  private val d: Day11 = Day11()

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
    Assert.assertEquals("vzbxxyzz", d.part1("vzbxkghb"))
  }

  @Test
  fun day11part2() {
    Assert.assertEquals("vzcaabcc", d.part1("vzbxxyzz"))
  }

}