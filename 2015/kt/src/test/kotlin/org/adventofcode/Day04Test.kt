package org.adventofcode

import org.junit.Assert
import org.junit.Test

class Day04Test {
  private val d = Day04("04")

  @Test
  fun day04Part1Example() {
    Assert.assertEquals("000001dbbfa", d.md5("abcdef609043"))
  }

}