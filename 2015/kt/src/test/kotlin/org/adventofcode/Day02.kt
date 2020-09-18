package org.adventofcode

typealias Paper = List<Int>

class Day02() {
  val paper = { l: Int, w: Int, h: Int ->
    val m = maxOf(l, w, h)
    (l * w + w * h + h * l) * 2 + l * w * h / m
  }

  val paper2 = { l: Int, w: Int, h: Int ->
    val m = maxOf(l, w, h)
    (l + w + h - m) * 2 + l * w * h
  }

  private fun part(
    list: List<List<Int>>,
    fn: (Int, Int, Int) -> Int
  ): Int {
    return list.map { (l, w, h) -> fn(l, w, h) }.sum()
  }

  fun part1(list: List<Paper>) = part(list, paper)
  fun part2(list: List<Paper>) = part(list, paper2)
}