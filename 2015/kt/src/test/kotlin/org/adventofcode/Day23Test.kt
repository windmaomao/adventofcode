package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day23Test {
  private val d: Day23 = Day23()
  private val instructions = parseFile("23")
    .map { d.getInstr(it) }

  @Test
  fun day23GetInstr() {
    val i1 = d.getInstr("inc a")
    assertEquals(
      listOf("inc", 0),
      listOf(i1.name, i1.pos)
    )
    val i2 = d.getInstr("jio b, +2")
    assertEquals(
      listOf("jio", 1, 2),
      listOf(i2.name, i2.pos, i2.rel)
    )
  }

  @Test
  fun day23RegistryRun() {
    val re = Registry(listOf(
      d.getInstr("inc a"),
      d.getInstr("jio a, +2"),
      d.getInstr("tpl a"),
      d.getInstr("inc a")
    ))
    assertEquals(2, re.run().first())
  }

  @Test
  fun day23Part1() {
    assertEquals(184, d.part1(instructions))
  }

  @Test
  fun day23Part2() {
    assertEquals(231, d.part2(instructions))
  }

}