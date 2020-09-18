package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day02Test {
  private val d = Day02()
  val lines = parseFile("02").map { it.extractNumbers() }

  @Test fun day02Part1Example() {
    assertEquals(58, d.paper(2, 3, 4))
    assertEquals(43, d.paper(1, 1, 10))
  }

  @Test fun day02Part1() {
    assertEquals(1588178, d.part1(lines))
  }

  @Test fun day02Part2Example() {
    assertEquals(34, d.paper2(2, 3, 4))
    assertEquals(14, d.paper2(1, 1, 10))
  }

  @Test fun day02Part2() {
    assertEquals(3783758, d.part2(lines))
  }

}
