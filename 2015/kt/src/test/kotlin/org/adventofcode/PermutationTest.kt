package org.adventofcode

import org.junit.Assert.*
import org.junit.Test

class PermutationTest {
  @Test
  fun permuteEmpty() {
    assertEquals(
      listOf<Int>(),
      listOf<Int>().permutations()
    )
  }

  @Test
  fun permuteOne() {
    assertEquals(listOf(listOf(1)), listOf(1).permutations())
  }

  @Test
  fun permuteTwo() {
    assertEquals(listOf(listOf(1, 2), listOf(2, 1)), listOf(1, 2).permutations())
  }

  @Test
  fun permuteThree() {
    assertEquals(6, listOf(1, 2, 3).permutations().size)
  }

  @Test
  fun permuteFour() {
    val l4 = listOf(1, 2, 3, 4)
    assertEquals(24, l4.permutations().size)
    val l5 = listOf(1, 2, 3, 4, 5)
    assertEquals(120, l5.permutations().size)
    val l6 = listOf(1, 2, 3, 4, 5, 6)
    assertEquals(720, l6.permutations().size)
  }

}