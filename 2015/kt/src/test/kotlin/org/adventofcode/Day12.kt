package org.adventofcode

class Day12 {
  fun sum(s: String) = s.extractNumbers(true).sum()

  fun part1(s: String) = sum(s)

  fun removeMatched(s: String): String {
    val chars: CharArray = s.toCharArray()
    val starts: MutableList<Int> = mutableListOf()
    s.forEachIndexed { i, c ->
      if (c == '{') starts.add(i)
      if (c == '}') {
        val j = starts.last()
        val str = (j..i).map { chars[it] }.joinToString("")
        if ("""".":"red"""".toRegex().containsMatchIn(str)) {
          (j..i).forEach { chars[it] = ' ' }
        }
        starts.remove(starts.last())
      }
    }
    return chars.joinToString("")
  }

  fun part2(s: String) = sum(removeMatched(s))
}