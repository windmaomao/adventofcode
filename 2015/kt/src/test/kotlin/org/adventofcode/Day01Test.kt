package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day01Test {
  private val d = Day01()
  val ops = d.extractOps(parseFile("01")[0])


  @Test fun day01Part1Example() {
    val part1 = { s: String -> d.part1(d.extractOps(s)) }
    assertEquals(0, part1("(())"))
    assertEquals(0, part1("()()"))
    assertEquals(3, part1("((("))
    assertEquals(3, part1("(()(()("))
    assertEquals(3, part1("))((((("))
    assertEquals(-1, part1("())"))
    assertEquals(-1, part1("))("))
    assertEquals(-3, part1(")))"))
    assertEquals(-3, part1(")())())"))
  }

  @Test fun day01Part1() {
    assertEquals(280, d.part1(ops))
  }

  @Test fun day02Part2Example() {
    val part2 = { s: String -> d.part2(d.extractOps(s)) }
    assertEquals(1, part2(")"))
    assertEquals(5, part2("()())"))
  }

  @Test fun day01Part2() {
    assertEquals(1797, d.part2(ops))
  }

}
