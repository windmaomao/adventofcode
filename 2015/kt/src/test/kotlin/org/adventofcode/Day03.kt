package org.adventofcode

class Day03() {
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
  @OptIn(ExperimentalStdlibApi::class)
  fun part1(s: String) = s
    .scan(0, nextPos)
    .distinct()
    .count()

  @OptIn(ExperimentalStdlibApi::class)
  fun part2(s: String) = s
    .mapIndexed { i, _ -> i }
    .groupBy { it % 2 }.values
    .flatMap { it
      .map { i -> s[i] }
      .scan(0, nextPos)
    }
    .distinct()
    .count()

  @OptIn(ExperimentalStdlibApi::class)
  fun part2o(s: String): Int {
    return s.chunked(2)
      .scan(listOf(0,0)) {
        acc: List<Int>, c: String ->
          acc.mapIndexed { i, a -> nextPos(a, c[i]) }
      }
      .flatten()
      .distinct().count()
  }



}
