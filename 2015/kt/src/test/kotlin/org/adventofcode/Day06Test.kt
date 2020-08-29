package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class Day06Test {
  private val d: Day06 = Day06("06")

  @Test
  fun day06Instruction() {
    val ins1 = Instruction(0, 0, 0, 0)
    assertEquals(listOf(0), ins1.getPos())
    val ins2 = Instruction(0, 0, 0, 1)
    assertEquals(listOf(0, 1), ins2.getPos())
    val ins3 = Instruction(0, 0, 1, 1, 10)
    assertEquals(listOf(0, 1, 10, 11), ins3.getPos())
    val arr: Array<Boolean> = arrayOf(false, true, true, false)
    assertArrayEquals(
      arrayOf(true, false, true, false),
      Instruction(0, 0, 0, 1, 2, ACTION.Toggle).applyArr(arr)
    )
    assertArrayEquals(
      arrayOf(true, true, true, true),
      Instruction(0, 0, 1, 1, 2, ACTION.On).applyArr(arr)
    )
    assertArrayEquals(
      arrayOf(true, true, true, false),
      Instruction(1, 1, 1, 1, 2, ACTION.Off).applyArr(arr)
    )
  }

  @Test
  fun day06Part1Example() {
    val (y0, x0, y1, x1, n, a) = d.getInstruction("turn on 461,550 through 564,900")
    assertEquals(
      listOf(461, 550, 564, 900, 1000, ACTION.On),
      listOf(y0, x0, y1, x1, n, a)
    )
  }

  @Test
  fun day06Part1() {
    assertEquals(543903, d.part1(d.lines))
  }

  @Test
  fun day06Part2() {
    assertEquals(14687245, d.part2(d.lines))
  }

}