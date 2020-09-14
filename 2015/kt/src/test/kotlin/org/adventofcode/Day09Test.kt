package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day09Test {
  private val d: Day09 = Day09()
  val lines = parseFile("09")

  @Test
  fun day09Route() {
    assertEquals(
      Triple("London", "Dublin", 464),
      d.extractRoute("London to Dublin = 464")
    )
  }

  @Test
  fun day09Part1Example() {
    assertEquals(
      605,
      d.part1(listOf(
        "London to Dublin = 464",
        "London to Belfast = 518",
        "Dublin to Belfast = 141"
      ))
    )
  }

  @Test
  fun day09Part1() {
    assertEquals(141, d.part1(lines))
  }

  @Test
  fun day09Part2Example() {
    assertEquals(
      982,
      d.part2(listOf(
        "London to Dublin = 464",
        "London to Belfast = 518",
        "Dublin to Belfast = 141"
      ))
    )
  }

  @Test
  fun day09Part2() {
    assertEquals(736, d.part2(lines))
  }

}
