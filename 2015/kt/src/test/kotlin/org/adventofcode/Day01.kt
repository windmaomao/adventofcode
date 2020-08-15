package org.adventofcode

fun charValue(c: Char) : Int {
  return if (c == '(') 1 else -1
}

class Day01(name: String): Day(name) {
  fun part1(s: String): Int {
    return s.map(::charValue).sum()
  }

  /**
   * Brutal force,
   * iterate through and return if found
   */
  fun part2(s: String): Int {
    var i = 0
    var v = 0
    run loop@{
      s.forEach {
        if (v == -1) return@loop
        v += charValue(it)
        i++
      }
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