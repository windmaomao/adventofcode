package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day24Test {
  private val d: Day24 = Day24()
  private val coins = parseFile("24").map { it.toInt() }
  val coinsSample = listOf(1, 2, 3, 4, 5, 7, 8, 9, 10, 11)

  @Test
  fun day24CoinChange() {
    assertEquals(25, coinChange(coinsSample, 20).toList().size)
  }

  @Test
  fun day24Part1Example() {
    assertEquals(99L, d.part1(coinsSample))
  }

  @Test
  fun day24Part1() {
    assertEquals(11846773891L, d.part1(coins))
  }

  @Test
  fun day24Part2Example() {
    assertEquals(44L, d.part2(coinsSample))
  }

  @Test
  fun day24Part2() {
    assertEquals(80393059L, d.part2(coins))
  }

}