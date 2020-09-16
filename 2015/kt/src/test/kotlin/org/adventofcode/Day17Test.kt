package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day17Test {
  private val d: Day17 = Day17()
  val lines = parseFile("17")

  @Test
  fun day17CoinChange() {
    assertEquals(
      listOf(
        listOf(1, 2)
      ),
      d.coinChange(listOf(1, 2), 3).toList()
    )
    assertEquals(
      listOf(
        listOf(20, 5),
        listOf(20, 5),
        listOf(15, 10),
        listOf(15, 5, 5)
      ),
      d.coinChange(listOf(20, 15, 10, 5, 5), 25).toList()
    )
  }

  @Test
  fun day17Part1() {
    assertEquals(654, d.part1(lines))
  }

}