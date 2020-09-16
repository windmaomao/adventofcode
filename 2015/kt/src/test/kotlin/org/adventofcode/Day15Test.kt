package org.adventofcode

import org.junit.Assert.assertEquals
import org.junit.Test

class Day15Test {
  private val d: Day15 = Day15()
  private val sampleIngredients = listOf(
    listOf(-1, -2, 6, 3, 8),
    listOf(2, 3, -2, -1, 3)
  )
  val lines = parseFile("15")

//  val lines = parseFile("14")

//  @Test
//  fun day15CalcScore() {
//    assertEquals(
//      62842880,
//      d.calcScore(listOf(44, 56), sampleIngredients)
//    )
//  }

//  @Test
//  fun day15Part1Example() {
//    assertEquals(
//      62842880,
//      d.part(d.genList(), sampleIngredients)
//    )
//  }

  @Test
  fun day15Part1() {
    assertEquals(13882464, d.part1(lines))
  }

  @Test
  fun day15Part2() {
    assertEquals(13882464, d.part2(lines))
  }

}