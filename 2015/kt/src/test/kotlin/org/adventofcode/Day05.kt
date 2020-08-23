package org.adventofcode

class Day05(name: String): Day(name) {

  fun getStrs(): List<String> {
    loadRes()
    return lines
  }

  fun matches1(s: String): Boolean {
    if ("ab|cd|pq|xy".toRegex().containsMatchIn(s)) return false
    if (!"([a-z])\\1".toRegex().containsMatchIn(s)) return false
    return "[aeiou]".toRegex().findAll(s).toList().size > 2
  }

  fun day1(strs: List<String>): Int {
    return strs.map(::matches1).count{ it == true }
  }

}