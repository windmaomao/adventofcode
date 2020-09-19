package org.adventofcode

class Day01() {
  private fun charValue(c: Char): Int = when (c) {
    '(' -> 1
    ')' -> -1
    else -> 0
  }

  fun extractOps(s: String): List<Int> = s
    .map { charValue(it) }
    .toList()

  fun part1(ops: List<Int>) = ops.sum()

  @OptIn(ExperimentalStdlibApi::class)
  fun part2(ops: List<Int>): Int = ops.asSequence()
    .scan(0) { acc, v -> acc + v }
    .indexOf(-1)

}