package org.adventofcode

fun charValue(c: Char) : Int {
  return if (c == '(') 1 else -1
}

class Day01(name: String): Day(name) {
  fun part1(s: String): Int {
    return s.map(::charValue).sum()
  }

  fun part2(s: String): Int {
    var i = 0
    var v = 0
    run loop@{
      s.forEach {
        if (v == -1) return@loop
        v += charValue(it)
        i++
      }
    }
    return i
  }

}