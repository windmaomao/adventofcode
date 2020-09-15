package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day13Test {
  private val d: Day13 = Day13()
  val lines = parseFile("13")

  @Test
  fun day13ExtractSitting() {
    assertEquals(
      Triple("Alice", "Bob", -57),
      d.extractSitting("Alice would lose 57 happiness units by sitting next to Bob.")
    )
    assertEquals(
      Triple("Alice", "Eric", 71),
      d.extractSitting("Alice would gain 71 happiness units by sitting next to Eric.")
    )
  }

  @Test
  fun day13Part1Example() {
    assertEquals(
      330,
      d.part1(listOf(
        "Alice would gain 54 happiness units by sitting next to Bob.",
        "Alice would lose 79 happiness units by sitting next to Carol.",
        "Alice would lose 2 happiness units by sitting next to David.",
        "Bob would gain 83 happiness units by sitting next to Alice.",
        "Bob would lose 7 happiness units by sitting next to Carol.",
        "Bob would lose 63 happiness units by sitting next to David.",
        "Carol would lose 62 happiness units by sitting next to Alice.",
        "Carol would gain 60 happiness units by sitting next to Bob.",
        "Carol would gain 55 happiness units by sitting next to David.",
        "David would gain 46 happiness units by sitting next to Alice.",
        "David would lose 7 happiness units by sitting next to Bob.",
        "David would gain 41 happiness units by sitting next to Carol."
      ))
    )
  }

  @Test
  fun day13Part1() {
    assertEquals(618, d.part1(lines))
  }

  @Test
  fun day12Part2() {
    assertEquals(601, d.part2(lines))
  }

}