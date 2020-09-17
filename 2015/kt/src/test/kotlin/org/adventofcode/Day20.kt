package org.adventofcode

class Day20 {
  fun allDivisors(n: Int): List<Int> {
    return (1..n).filter { n.rem(it) == 0 }.toList()
  }

  fun sumDivisors(n: Int): Int {
    return allDivisors(n).sum() * 10
  }

  fun part1(n: Int, start: Int, end: Int): Int {
    var i = start
    while (i <= end) {
      if (sumDivisors(i) >= n) return i
      i++
    }
    return 0
  }

  fun sumDivisors2(n: Int): Int {
    return allDivisors(n).filter { n.div(it) <= 50 }.sum() * 11
  }

  fun part2(n: Int, start: Int, end: Int): Int {
    var i = start
    while (i <= end) {
      if (sumDivisors2(i) >= n) return i
      i++
    }
    return 0
  }

}