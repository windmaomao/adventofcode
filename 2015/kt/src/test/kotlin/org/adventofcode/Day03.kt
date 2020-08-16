package org.adventofcode

class Day03(name: String): Day(name) {
  private val LEN = 10000
  val nextPos = { acc: Int, c: Char ->
    when(c) {
      '^' -> acc + LEN
      'v' -> acc - LEN
      '>' -> acc + 1
      '<' -> acc - 1
      else -> acc
    }
  }
  val teamPoses = { acc: List<Int>, c: String ->
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
