package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day04Test {
  private val d = Day04("04")

  @Test
  fun day04Part1Example() {
    val match = d.matcher("abcdef", 5)
    assertEquals(true, match(609043))
    val match2 = d.matcher("pqrstuv", 5)
    assertEquals(true, match2(1048970))
  }

  @Test
  fun day04Part1() {
    assertEquals(254575, d.part1(d.getLine()))
  }

  @Test
  fun day04Part2() {
    assertEquals(1038736, d.part2(d.getLine()))
  }

}