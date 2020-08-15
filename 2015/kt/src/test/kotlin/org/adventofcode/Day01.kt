package org.adventofcode

fun step(c: Char, i: Int, v: Int) : Int {
  return if (c == '(') (v + 1) else (v - 1)
}

class Day01(name: String): Day(name) {
  fun part1(s: String): Int {
    return s.count{ it == '(' } - s.count{ it == ')' }
  }

  fun part2(s: String): Int {
    var i = 0
    var v = 0
    while (i < s.length) {
      v = step(s.get(i), i, v)
      i++
      if (v == -1) return i
    }
    return 0
  }

}