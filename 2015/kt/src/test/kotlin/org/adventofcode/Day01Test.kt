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
    assertEquals(280, d.part1(d.getLine()))
  }

  @Test fun day01Part2() {
    assertEquals(1797, d.part2(d.getLine()))
  }

  @OptIn(ExperimentalStdlibApi::class)
  @Test fun day01Part2s() {
    assertEquals(1797, d.part2s(d.getLine()))
  }

}
