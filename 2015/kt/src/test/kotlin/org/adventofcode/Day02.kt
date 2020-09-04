package org.adventofcode

data class Box(val l: Int, val w: Int, val h: Int) {
  private val m = maxOf(l, w, h)
  fun paper() = (l * w + w * h + h * l) * 2 + l * w * h / m
  fun reserved() = (l + w + h - m) * 2 + l * w * h
}

class Day02(name: String = "02"): Day(name) {
  fun getBox(s: String): Box {
    val (l, w, h) = extractNumbers(s)
    return Box(l, w, h)
  }

  fun part1(list: List<String>): Int {
    return list.map { getBox(it).paper() }.sum()
  }

  fun part2(list: List<String>): Int {
    return list.map { getBox(it).reserved() }.sum()
  }
}