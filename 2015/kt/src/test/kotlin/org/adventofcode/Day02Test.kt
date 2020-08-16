package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day02Test {
  private val d = Day02("02")

  @Test fun day02Part1Example() {
    val list = listOf(listOf(2, 3, 4))
    assertEquals(58, d.part1(list))
    val list2 = listOf(listOf(1, 1, 10))
    assertEquals(43, d.part1(list2))
  }

  @Test fun day02Part2Example() {
    val list = listOf(listOf(2, 3, 4))
    assertEquals(34, d.part2(list))
    val list2 = listOf(listOf(1, 1, 10))
    assertEquals(14, d.part2(list2))
  }

  @Test fun day02Part1() {
    assertEquals(1588178, d.part1(d.getProps()))
  }

  @Test fun day02Part2() {
    assertEquals(3783758, d.part2(d.getProps()))
  }

}
