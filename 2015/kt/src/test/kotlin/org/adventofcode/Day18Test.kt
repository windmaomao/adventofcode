package org.adventofcode

import org.junit.Assert.assertArrayEquals
import org.junit.Assert.assertEquals
import org.junit.Test

class Day18Test {
  private val d: Day18 = Day18()
  val lines = parseFile("18")

  @Test
  fun day18ExtractState() {
    assertArrayEquals(
      booleanArrayOf(
        false, false, false, false,
        false, true, false, false,
        false, false, true, false,
        false, false, false, false
      ),
      d.extractState(listOf("#.", ".#"), 2)
    )
  }

  @Test
  fun day17NextState() {
    var state = d.extractState(listOf(
      ".#.#.#",
      "...##.",
      "#....#",
      "..#...",
      "#.#..#",
      "####.."
    ), 6)
    state = d.nextState(state, 6)
    assertEquals(11, state.count { it })
    state = d.nextState(state, 6)
    assertEquals(8, state.count { it })
    state = d.nextState(state, 6)
    assertEquals(4, state.count { it })
    state = d.nextState(state, 6)
    assertEquals(4, state.count { it })
  }

  @Test
  fun day18Part1() {
    assertEquals(814, d.part1(lines))
  }
}