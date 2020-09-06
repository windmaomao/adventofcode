package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day08Test {
  private val d: Day08 = Day08()
  private val lines = parseFile("08")

  @Test
  fun day08Real() {
    assertEquals(2, d.diff(""""""""))
    assertEquals(2, d.diff(""""abc""""))
    assertEquals(3, d.diff(""""aaa\"aaa""""))
    assertEquals(5, d.diff(""""\x27""""))
    assertEquals(5, d.diff(""""\xfb""""))
    assertEquals(4, d.diff(""""d\\fb\"u""""))
  }

  @Test
  fun day08() {
    assertEquals(1342, d.part1(lines))
  }

}