package org.adventofcode

class Day14 {
  fun extractReindeer(s: String): Triple<Int, Int, Int> {
    val ns = s.extractNumbers()
    return Triple(ns[0], ns[1], ns[2])
  }

  fun posSeq(speed: Int, fly: Int, rest: Int): Sequence<Int> {
    var pos = 0
    var mode = 0
    var timer = 0
    return sequence {
      while (true) {
        // reset timer
        if (timer == 0) {
          if (mode == 0) {
            mode = 1; timer = fly
          } else {
            mode = 0; timer = rest
          }
        }
        pos += if (mode == 0) 0 else speed
        yield(pos)
        timer--
      }
    }
  }

  fun part1(list: List<String>): Int {
    val n = 2503
    return list.map {
      val (speed, fly, rest) = extractReindeer(it)
      posSeq(speed, fly, rest).take(n).last()
    }.max() ?: 0
  }

//  fun part2(list: List<String>): Int {
//    val n = 2503 + 1
//    return list.map {
//      val (speed, fly, rest) = extractReindeer(it)
//      posSeq(speed, fly, rest).take(n).last()
//    }.max() ?: 0
//  }
}