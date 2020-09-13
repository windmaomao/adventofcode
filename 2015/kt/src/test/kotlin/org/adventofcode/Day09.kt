package org.adventofcode

class Day09 {
  fun extractRoute(s: String): Triple<String, String, Int> {
    val p0 = s.split(" = ")
    val p1 = p0[0].split(" to ")
    return Triple(p1[0], p1[1], p0[1].toInt())
  }

  fun part1(list: List<String>) {

  }
}