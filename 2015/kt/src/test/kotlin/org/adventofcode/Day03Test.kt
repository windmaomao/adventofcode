package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day03Test {
  private val d = Day03("03")

  @Test fun day03Part1Example() {
    assertEquals(2, d.part1(">"))
    assertEquals(4, d.part1("^>v<"))
    assertEquals(2, d.part1("^v^v^v^v^v"))
  }

  @Test fun day03Part2Example() {
    assertEquals(3, d.part2("^v"))
    assertEquals(3, d.part2("^>v<"))
    assertEquals(11, d.part2("^v^v^v^v^v"))
  }

  @Test fun day03Part1() {
    assertEquals(2572, d.part1(d.getLine()))
  }

  @Test fun day03Part2() {
    assertEquals(2631, d.part2(d.getLine()))
  }

}
