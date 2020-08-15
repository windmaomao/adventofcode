package org.adventofcode

class Day01(name: String): Day(name) {
  fun part1(s: String): Int {
    return s.count{ it == '(' } - s.count{ it == ')' }
  }

  fun part2(s: String): Int {
    var i = 0
    var v = 0
    while (i < s.length) {
      if (s.get(i) == '(') v += 1
      if (s.get(i) == ')') v -= 1
      if (v == -1) {
        i++
        return i
      }
      i++
    }
    return 0
  }
}