package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day14Test {
  private val d: Day14 = Day14()
  val lines = parseFile("14")

  @Test
  fun day14ExtractDeers() {
    assertEquals(
      Triple(14, 10, 127),
      d.extractReindeer("Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.")
    )
  }

  @Test
  fun day14PosSeq() {
    val n = 6
    assertEquals(
      listOf(1, 2, 2, 2, 3, 4),
      d.posSeq(1, 2, 2).take(n).toList()
    )
    assertEquals(
      listOf(1, 2, 3, 3, 4, 5),
      d.posSeq(1, 3, 1).take(n).toList()
    )
    assertEquals(
      listOf(2, 2, 2, 4, 4, 4),
      d.posSeq(2, 1, 2).take(n).toList()
    )
  }

  @Test
  fun day14Part1() {
    assertEquals(2655, d.part1(lines))
  }

}