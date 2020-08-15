package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day01Test {
  private val d = Day01("01")

  @Test fun day01Part1Example() {
    assertEquals(0, d.part1("(())"))
    assertEquals(0, d.part1("()()"))
    assertEquals(3, d.part1("((("))
    assertEquals(3, d.part1("(()(()("))
    assertEquals(3, d.part1("))((((("))
    assertEquals(-1, d.part1("())"))
    assertEquals(-1, d.part1("))("))
    assertEquals(-3, d.part1(")))"))
    assertEquals(-3, d.part1(")())())"))
  }

  @Test fun day02Part2Example() {
    assertEquals(1, d.part2(")"))
    assertEquals(5, d.part2("()())"))
  }

  @Test fun day01Part1() {
    val s = d.loadRes()
    assertEquals(280, d.part1(s))
  }

  @Test fun day01Part2() {
    val s = d.loadRes()
    assertEquals(1797, d.part2(s))
  }

  @OptIn(ExperimentalStdlibApi::class)
  @Test fun day01Part2s() {
    val s = d.loadRes()
    assertEquals(1797, d.part2s(s))
  }

}
