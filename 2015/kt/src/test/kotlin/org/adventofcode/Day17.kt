package org.adventofcode

class Day17 {

  fun coinChange(
    numbers: List<Int>,
    target: Int,
    partial: List<Int>,
    partialSum: Int = 0
  ): Sequence<List<Int>> {
    return sequence {
      if (partialSum == target) { yield(partial) }
      if (partialSum > target) return@sequence

      val n = numbers.size
      numbers.forEachIndexed { i, v ->
        yieldAll(coinChange(
          numbers.subList(i+1, n),
          target,
          partial.plus(v),
          partialSum + v
        ))
      }
    }

  }
}