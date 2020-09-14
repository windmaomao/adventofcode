package org.adventofcode

class Day11 {
  fun genPasswordSeq(start: String): Sequence<String> {
    val n = 27
    val from = { c: String -> c[0].toInt() - 96 }
    val to = { c: Int -> (96 + c).toChar().toString() }
    var i = start.toDecimal(n, from)

    return sequence {
      while(true) {
        yield((++i).toBase(n, to))
      }
    }
  }
}