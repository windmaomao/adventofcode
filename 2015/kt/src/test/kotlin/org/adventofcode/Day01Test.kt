package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test
import java.io.File

class Day01Test {
  val d = Day01()

  private fun loadResource(): String {
    val fn = "src/test/resources/01.data"
    val lines: List<String> = File(fn).readLines()
    return lines.first()
  }

  @Test fun Day01Part1Example() {
    assertEquals(0, d.part1("(())"))
    assertEquals(0, d.part1("()()"))
    assertEquals(3, d.part1("((("))
    assertEquals(3, d.part1("(()(()("))
    assertEquals(3, d.part1("))((((("))
    assertEquals(-1, d.part1("())"))
    assertEquals(-1, d.part1("))("))
    assertEquals(-3, d.part1(")))"))
    assertEquals(-3, d.part1(")())())"))
  }

  @Test fun Day01Part1() {
    val s = loadResource()
    assertEquals(280, d.part1(s))
  }
}
