package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day19Test {
  private val d: Day19 = Day19()
  val lines = parseFile("19")
  val exampleReplacements = listOf(
    listOf("H", "HO"),
    listOf("H", "OH"),
    listOf("O", "HH")
  )

  @Test
  fun day19RegexStr() {
    assertEquals("H|O", d.regexStr(exampleReplacements))
  }

  @Test
  fun day19ReplaceStr() {
    assertEquals(
      IntRange(0, 0),
      "H".toRegex().find("HOH")?.range
    )
    assertEquals(
      "HOOH",
      d.replaceStr("HOH", IntRange(0, 0), "HO")
    )
    assertEquals(
      IntRange(1, 1),
      "O".toRegex().find("HOH")?.range
    )
    assertEquals(
      "HHHH",
      d.replaceStr("HOH", IntRange(1, 1), "HH")
    )
  }

  @Test
  fun day19Part1Example() {
    assertEquals(
      4,
      d.allMolecules("HOH", exampleReplacements)
    )
    assertEquals(7,
      d.allMolecules("HOHOHO", exampleReplacements)
    )
  }

  @Test
  fun day19Part1() {
    assertEquals(509, d.part1(lines))
  }

}