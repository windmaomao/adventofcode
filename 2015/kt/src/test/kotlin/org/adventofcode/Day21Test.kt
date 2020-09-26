package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day21Test {
  private val d: Day21 = Day21()

  @Test
  fun day21Fight() {
    assertEquals(true, d.fight(
      Item("", 0, 5, 5), 8,
      Item("", 0, 7, 2), 12
    ))
    assertEquals(false, d.fight(
      Item("", 0, 5, 5), 8,
      Item("", 0, 20, 2), 12
    ))
  }

  @Test
  fun day21Part1() {
    assertEquals(78, d.part1())
  }

  @Test
  fun day21Part2() {
    assertEquals(148, d.part2())
  }

}