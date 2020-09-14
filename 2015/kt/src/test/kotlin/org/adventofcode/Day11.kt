package org.adventofcode

class Day11 {
//  fun genPasswordSeq(start: String): Sequence<String> {
//    val n = 27
//    val from = { c: String -> c[0].toInt() - 96 }
//    val to = { c: Int -> (96 + c).toChar().toString() }
//    var i = start.toDecimal(n, from)
//
//    return sequence {
//      while(true) {
//        yield((++i).toBase(n, to))
//      }
//    }
//  }

  fun nextPassword(str: String): String {
    var required = true
    return str.chunked(1).reversed().map { s ->
      if (!required) s else {
        var c = (s[0].toInt() + 1).toChar()
        if (c > 'z') "a" else {
          required = false
          c.toString()
        }
      }
    }.reversed().joinToString("")
  }

  fun passwordSeq(str: String): Sequence<String> {
    var s = str
    return sequence {
      while (true) {
        s = nextPassword(s)
        yield(s)
      }
    }
  }

  fun rightPassword(s: String): Boolean {
    if ("i|o|l".toRegex().containsMatchIn(s)) return false
    return "abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz".toRegex().containsMatchIn(s)
  }

  fun part1(start: String): String {
    return passwordSeq(start).find(::rightPassword) ?: ""
  }
}