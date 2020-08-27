package org.adventofcode

class Day03(name: String): Day(name) {
  private val len = 10000
  private val nextPos = { acc: Int, c: Char ->
    when(c) {
      '^' -> acc + len
      'v' -> acc - len
      '>' -> acc + 1
      '<' -> acc - 1
      else -> acc
    }
  }
  private val teamPoses = { acc: List<Int>, c: String ->
    acc.mapIndexed { i, a -> nextPos(a, c[i]) }
  }

  @OptIn(ExperimentalStdlibApi::class)
  fun part1(s: String): Int {
    return s.scan(0, nextPos).distinct().count()
  }

  @OptIn(ExperimentalStdlibApi::class)
  fun part2(s: String): Int {
    return s.chunked(2)
      .scan(listOf(0,0), teamPoses)
      .flatten()
      .distinct().count()
  }
}
