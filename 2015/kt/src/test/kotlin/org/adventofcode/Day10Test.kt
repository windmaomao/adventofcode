package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day10Test {
  private val d: Day10 = Day10()
  private val line = "1321131112"

  @Test
  fun day10part1Example() {
    assertEquals("11", d.part1("1"))
    assertEquals("21", d.part1("11"))
    assertEquals("1211", d.part1("21"))
    assertEquals("111221", d.part1("1211"))
    assertEquals("312211", d.part1("111221"))
  }

  @Test
  fun day10part1() {
    assertEquals(492982, d.part1(line))
  }

  @Test
  fun day10part2() {
    assertEquals(6989950, d.part2(line))
  }
}