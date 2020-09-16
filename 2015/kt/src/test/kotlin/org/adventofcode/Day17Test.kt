package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day17Test {
  private val d: Day17 = Day17()
//  val lines = parseFile("17")

  @Test
  fun day17CoinChange() {
    assertEquals(
      listOf(
        listOf(1, 2)
      ),
      d.coinChange(listOf(1, 2), 3, emptyList()).toList()
    )
    assertEquals(
      listOf(
        listOf(20, 5),
        listOf(20, 5),
        listOf(15, 10),
        listOf(15, 5, 5)
      ),
      d.coinChange(listOf(20, 15, 10, 5, 5), 25, emptyList()).toList()
    )
  }

//  @Test
//  fun day16Part1() {
//    assertEquals(373, d.part1(lines))
//  }
//
//  @Test
//  fun day16Part2() {
//    assertEquals(260, d.part2(lines))
//  }
}