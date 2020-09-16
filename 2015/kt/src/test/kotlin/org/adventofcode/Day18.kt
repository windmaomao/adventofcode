package org.adventofcode

class Day18 {
  var n = 0
  var m = 0

  fun setSize(s: Int) {
    n = s
    m = n + 2
  }

  private fun neighbors() = listOf(
    -m-1, -m, -m+1,
    -1      , +1,
    m-1, m , m+1
  )
  private fun pos(i: Int, j: Int) = i * m + j

  fun extractState(str: List<String>): BooleanArray {
    val arr = BooleanArray(m * m) { false }
    str.forEachIndexed { i, s ->
      s.forEachIndexed { j, c ->
        val p = pos(i+1, j+1)
        arr[p] = (c == '#')
      }
    }
    return arr
  }

  fun nextState(prev: BooleanArray): BooleanArray {
    val state = prev.clone()
    val ns = neighbors()
    (1..n).forEach { i ->
      (1..n).forEach { j ->
        val p = pos(i, j)
        val c = ns.map { prev[it+p] }.count { it }
        state[p] = if (state[p]) (c == 2 || c == 3) else (c == 3)
      }
    }
    return state
  }

  fun part1(str: List<String>): Int {
    var state = extractState(str)
    (1..n).forEach { state = nextState(state) }
    return state.count { it }
  }

  fun fixState(prev: BooleanArray): BooleanArray {
    val state = prev.clone()
    state[pos(1, 1)] = true
    state[pos(1, n)] = true
    state[pos(n, 1)] = true
    state[pos(n, n)] = true
    return state
  }

  fun part2(str: List<String>): Int {
    var state = fixState(extractState(str))
    (1..n).forEach { state = fixState(nextState(state)) }
    return state.count { it }
  }

}