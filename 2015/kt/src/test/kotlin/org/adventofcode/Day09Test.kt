package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day09Test {
  private val d: Day09 = Day09()

  @Test
  fun day09Route() {
    assertEquals(
      Triple("London", "Dublin", 464),
      d.extractRoute("London to Dublin = 464")
    )
  }
}
