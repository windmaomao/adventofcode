package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class DecimalTest {
  private val customFrom = { c: String -> c[0].toInt() - 97 }
  private val customTo = { c: Int -> (97 + c).toChar().toString() }

  @Test
  fun decimalFrom() {
    assertEquals(105, "105".toDecimal())
    assertEquals(10, "1010".toDecimal(2))
    assertEquals(10, "baba".toDecimal(2, customFrom))
  }

  @Test
  fun decimalTo() {
    assertEquals("105", 105.toBase())
    assertEquals("1010", 10.toBase(2))
    assertEquals("baba", 10.toBase(2, customTo))
  }

}