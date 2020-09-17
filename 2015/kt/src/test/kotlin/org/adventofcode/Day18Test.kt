package org.adventofcode

import org.junit.Assert.assertArrayEquals
import org.junit.Assert.assertEquals
import org.junit.Test

class Day18Test {
  private val d: Day18 = Day18()
  val lines = parseFile("18")

  @Test
  fun day18ExtractState() {
    d.setSize(2)
    assertArrayEquals(
      booleanArrayOf(
        false, false, false, false,
        false, true, false, false,
        false, false, true, false,
        false, false, false, false
      ),
      d.extractState(listOf("#.", ".#"))
    )
  }

  @Test
  fun day17NextState() {
    d.setSize(6)
    var state = d.extractState(listOf(
      ".#.#.#",
      "...##.",
      "#....#",
      "..#...",
      "#.#..#",
      "####.."
    ))
    state = d.nextState(state)
    assertEquals(11, state.count { it })
    state = d.nextState(state)
    assertEquals(8, state.count { it })
    state = d.nextState(state)
    assertEquals(4, state.count { it })
    state = d.nextState(state)
    assertEquals(4, state.count { it })
  }

  @Test
  fun day18Part1() {
    d.setSize(100)
    assertEquals(814, d.part1(lines))
  }

  @Test
  fun day18Part2() {
    d.setSize(100)
    assertEquals(924, d.part2(lines))
  }

}