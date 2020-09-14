package org.adventofcode

class Day11 {
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

  private fun passwordSeq(str: String): Sequence<String> {
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
    if (!"abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz".toRegex().containsMatchIn(s)) return false
    return "(.)\\1".toRegex().findAll(s).toList().size > 1
  }

  fun part1(start: String): String {
    return passwordSeq(start).find(::rightPassword) ?: ""
  }
}