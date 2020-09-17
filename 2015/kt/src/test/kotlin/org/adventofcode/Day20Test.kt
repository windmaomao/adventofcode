package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day20Test {
  private val d: Day20 = Day20()

  @Test
  fun day20Divisors() {
    assertEquals(listOf(1,2), d.allDivisors(2))
    assertEquals(listOf(1,3), d.allDivisors(3))
    assertEquals(listOf(1,2,4), d.allDivisors(4))
    assertEquals(listOf(1,5), d.allDivisors(5))
  }

  @Test
  fun day20Part1Example() {
    assertEquals(10, d.sumDivisors(1))
    assertEquals(30, d.sumDivisors(2))
    assertEquals(40, d.sumDivisors(3))
    assertEquals(70, d.sumDivisors(4))
    assertEquals(60, d.sumDivisors(5))
    assertEquals(29000000, d.sumDivisors2(665280))
  }

  @Test
  fun day20Part1() {
    assertEquals(665280, d.part1(29000000, 660000, 670000))
  }

  @Test
  fun day20Part2() {
    assertEquals(705600, d.part2(29000000, 700000, 710000))
  }

}