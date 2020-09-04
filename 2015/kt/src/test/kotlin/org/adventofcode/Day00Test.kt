package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day00Test {

  @Test fun day00ParseFile() {
    assertEquals(
      listOf("line1", "line2", "line3"),
      parseFile("00")
    )
  }

  @Test fun day00ExtractNumbers() {
    assertEquals(
      emptyList<Int>(),
      "xbd".extractNumbers()
    )
    assertEquals(
      listOf(32,45,89),
      "32x45x89".extractNumbers()
    )
    assertEquals(
      listOf(857,493),
      "toggle 857,493".extractNumbers()
    )
  }

}
