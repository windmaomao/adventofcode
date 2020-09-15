package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class extractNumbersTest {

  @Test fun extractPositive() {
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

  @Test fun extractNegative() {
    assertEquals(
      listOf(32,-45,89),
      "32x-45x89".extractNumbers(true)
    )
    assertEquals(
      listOf(857,-493),
      "toggle 857,-493".extractNumbers(true)
    )
  }
}
