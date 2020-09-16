package org.adventofcode

class Day18 {
  fun neighbors(n: Int): List<Int> {
    val m = n + 2
    return listOf(
      -m-1, -m, -m+1,
      -1      , +1,
      m-1, m , m+1
    )
  }

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

  fun nextState(prev: BooleanArray, n: Int): BooleanArray {
    val m = n + 2
    val state = prev.clone()
    val ns = neighbors(n)
    (1..n).forEach { i ->
      (1..n).forEach { j ->
        val p = i * m + j
        val c = ns.map { prev[it+p] }.count { it }
        state[p] = if (state[p]) (c == 2 || c == 3) else (c == 3)
      }
    }
    return state
  }

  fun part1(str: List<String>): Int {
    val n = 100
    var state = extractState(str, n)
    (1..n).forEach { state = nextState(state, n) }
    return state.count { it }
  }

}