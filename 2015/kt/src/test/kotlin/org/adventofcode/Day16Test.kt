package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day16Test {
  private val d: Day16 = Day16()
  val lines = parseFile("16")

  @Test
  fun day16ExtractSue() {
    assertEquals(
      hashMapOf("cars" to 9, "akitas" to 3, "goldfish" to 0),
      d.extractSue("Sue 1: cars: 9, akitas: 3, goldfish: 0")
    )
    assertEquals(
      hashMapOf("children" to 5, "trees" to 1, "goldfish" to 10),
      d.extractSue("Sue 29: children: 5, trees: 1, goldfish: 10")
    )
  }

  @Test
  fun day16Part1() {
    assertEquals(373, d.part1(lines))
  }

  @Test
  fun day16Part2() {
    assertEquals(260, d.part2(lines))
  }
}