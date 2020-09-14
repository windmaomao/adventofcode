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

}
