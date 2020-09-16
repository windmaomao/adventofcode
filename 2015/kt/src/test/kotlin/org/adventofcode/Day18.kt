package org.adventofcode

class Day18 {
  val n = 6
  val m = n + 2
  val neighbors = listOf(
      -m-1, -m, -m+1,
      -1      , +1,
       m-1, m , m+1
  )

  fun extractState(str: List<String>, n: Int): BooleanArray {
    val m = n + 2
    val arr = BooleanArray(m * m) { false }
    str.forEachIndexed { i, s ->
      s.forEachIndexed { j, c ->
        val p = (i + 1) * m + j + 1
        arr[p] = (c == '#')
      }
    }
    return arr
  }

  fun nextState(prev: BooleanArray): BooleanArray {
    val state = prev.clone()
    (1..n).forEach { i ->
      (1..n).forEach { j ->
        val p = i * m + j
        val c = neighbors.map { prev[it+p] }.count { it }
        state[p] = if (state[p]) (c == 2 || c == 3) else (c == 3)
      }
    }
    return state
  }


}