package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day02Test {
  private val d = Day02("01")

  @Test fun day01Part1Example() {
    val list = listOf(listOf(2, 3, 4))
    assertEquals(58, d.part1(list))
    val list2 = listOf(listOf(1, 1, 10))
    assertEquals(43, d.part1(list2))
  }


}
