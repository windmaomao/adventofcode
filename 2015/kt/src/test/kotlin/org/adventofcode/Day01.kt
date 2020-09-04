package org.adventofcode

class Day01(name: String = "01"): Day(name) {
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

  fun getSequence(s: String) : Sequence<Int> {
    return sequence {
      var v = 0
      s.forEach {
        v += charValue(it)
        yield(v)
      }
    }
  }

  /**
   * Use yield to generate
   */
  fun part2y(s: String): Int {
    return getSequence(s).takeWhile{ it >= -1 }
      .toList().size
  }

}