package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day08Test {
  private val d: Day08 = Day08()
  private val lines = parseFile("08")

  @Test
  fun day08Diff() {
    assertEquals(2, d.diff(""""""""))
    assertEquals(2, d.diff(""""abc""""))
    assertEquals(3, d.diff(""""aaa\"aaa""""))
    assertEquals(5, d.diff(""""\x27""""))
    assertEquals(5, d.diff(""""\xfb""""))
    assertEquals(4, d.diff(""""d\\fb\"u""""))
  }

  @Test
  fun day08part1() {
    assertEquals(1342, d.part1(lines))
  }

  @Test
  fun day08Diff2() {
    assertEquals(4, d.diff2(""""""""))
    assertEquals(4, d.diff2(""""abc""""))
    assertEquals(6, d.diff2(""""aaa\"aaa""""))
    assertEquals(5, d.diff(""""\x27""""))
  }

  @Test
  fun day08part2() {
    assertEquals(2074, d.part2(lines))
  }
}