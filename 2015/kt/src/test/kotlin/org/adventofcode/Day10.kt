package org.adventofcode

class Day10 {
  fun lookAndSay(s: String): String {
    return "(.)\\1*".toRegex().findAll(s).map {
      it.value.length.toString() + it.value[0]
    }.joinToString("")
  }

  fun part(s: String, n: Int): Int {
    var p = s
    for (i in 1..n) {
      p = lookAndSay(p)
    }
    return p.length
  }

  fun part1(s: String) = part(s, 40)
  fun part2(s: String) = part(s, 50)
}