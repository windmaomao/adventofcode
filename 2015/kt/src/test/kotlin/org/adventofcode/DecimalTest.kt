package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class DecimalTest {
  val toInt = { c: String -> c.toInt() }

  @Test
  fun decimalFrom() {
    assertEquals(105, "105".toDecimal(toInt))
  }
}