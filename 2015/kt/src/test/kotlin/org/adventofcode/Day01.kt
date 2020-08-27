package org.adventofcode

class Day01(name: String): Day(name) {
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

  /**
   * Use scan to get a results array
   */
  @OptIn(ExperimentalStdlibApi::class)
  fun part2s(s: String): Int {
    val all = s.scan(0) { acc, c -> acc + charValue(c) }
    return all.indexOf(-1)
  }

}