package org.adventofcode

fun coinChange(
  numbers: List<Int>,
  target: Int,
  partial: List<Int> = emptyList(),
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

class Day24 {

  fun multiple(list: List<Int>) = list
    .map { it.toLong() }
    .fold(1L) { acc, v -> acc * v }

  fun part(coins: List<Int>, n: Int): Long {
    val weight = coins.sum() / n
    val combos = coinChange(coins, weight).toList()

    val minSize = combos.map { it.size }.min() ?: 0
    return combos
      .filter { it.size == minSize }
      .map { multiple(it) }
      .min() ?: 0
  }

  fun part1(coins: List<Int>) = part(coins, 3)
  fun part2(coins: List<Int>) = part(coins, 4)
}