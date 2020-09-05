package org.adventofcode

class Day01() {
  val charValue = { c: Char -> if (c == '(') 1 else -1 }

  fun part1(s: String): Int {
    return s.map(charValue).sum()
  }

  fun part2(s: String): Int {
    var i = 0
    var v = 0
    while(v != -1) {
      v += charValue(s[i])
      i++
    }
    return i
  }

  @OptIn(ExperimentalStdlibApi::class)
  fun part2sy(s: String): Int {
    val seq = s.asSequence()
      .scan(0) { acc, c -> acc + charValue(c) }
    return seq.indexOf(-1)
  }

}