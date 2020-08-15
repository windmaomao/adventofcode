package org.adventofcode

class Day01() {
  fun part1(s: String): Int {
    return s.count{ it == '(' } - s.count{ it == ')' }
  }
}