package org.adventofcode

class Day14 {

  fun posSeq(speed: Int, fly: Int, rest: Int): Sequence<Int> {
    var pos = 0
    var mode = 0
    var timer = 0
    return sequence {
      yield(0)
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
}