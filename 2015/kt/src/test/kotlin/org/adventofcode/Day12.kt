package org.adventofcode

class Day12 {
  fun sum(s: String) = s.extractNumbers(true).sum()

  fun part1(s: String) = sum(s)

  fun findPairs(s: String): Int {
    val starts: MutableList<Int> = mutableListOf()
    val pairs: MutableList<Pair<Int, Int>> = mutableListOf()
    s.forEachIndexed { i, c ->
      if (c == '{') starts.add(i)
      if (c == '}') {
        pairs.add(Pair(starts.last(), i))
        starts.remove(starts.last())
      }
    }
    return pairs.size;
  }

  fun part2(s: String) {

  }
}