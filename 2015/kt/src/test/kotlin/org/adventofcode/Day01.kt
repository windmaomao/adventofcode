package org.adventofcode

class Day01() {
  private fun charValue(c: Char): Int = when (c) {
    '(' -> 1
    ')' -> -1
    else -> 0
  }

  fun extractOps(s: String): List<Int> = s.map {
    charValue(it)
  }.toList()

  fun part1(ops: List<Int>) = ops.sum()

  /**
   * Simple solution for part2
   */
  fun part2s(s: String): Int {
    var i = 0
    var v = 0
    while(v != -1) {
      v += charValue(s[i])
      i++
    }
    return i
  }

  @OptIn(ExperimentalStdlibApi::class)
  fun part2(ops: List<Int>): Int = ops.asSequence()
    .scan(0) { acc, v -> acc + v }
    .indexOf(-1)

}