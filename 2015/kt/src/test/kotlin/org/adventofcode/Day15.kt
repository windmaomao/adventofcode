package org.adventofcode

class Day15 {
//  fun ingredients(list: List<String>): List<List<Int>> {
//    return list.map { it.extractNumbers() }
//  }

  // N - ingredients count
  // M - properties count

  fun sumProperties(
    spoons: List<Int>, // N
    ingredients: List<List<Int>>  // N * M
  ): List<Int> {
    return (0..4).map { j ->
      val sum = ingredients.mapIndexed { i, properties ->
        spoons[i] * properties[j]
      }.sum()
      if (sum > 0) sum else 0
    }
  }

  fun genList(): List<List<Int>> {
    val list: MutableList<List<Int>> = mutableListOf()
    val n = 100
    for (i in 1..n) {
      val l = n - i
      if (l > 0) {
        list.add(listOf(i, l))
      }
    }
    return list.toList()
  }

//  fun part(
//    spoonsList: List<List<Int>>,
//    ingredients: List<List<Int>>  // N * M
//  ): Int {
//    return spoonsList.map { calcScore(it, ingredients) }.max() ?: 0
//  }

  fun genSpoons(): List<List<Int>> {
    val list: MutableList<List<Int>> = mutableListOf()
    val n = 100
    for (i in 1..n) {
      for (j in 1..n) {
        for (k in 1..n) {
          val l = n - i - j - k
          if (l > 0) {
            list.add(listOf(i, j, k, l))
          }
        }
      }
    }
    return list.toList()
  }

  fun part(
    list: List<String>,
    checkCalories: Boolean = false
  ): Int {
    val ingredients = list.map {
      it.extractNumbers(true)
    }
    return genSpoons()
      .map {
        val properties = sumProperties(it, ingredients)
        val counted = !checkCalories || (properties[4] == 500)
        if (!counted) 0 else {
          properties.take(4)
            .reduce { acc, value -> acc * value }
        }
      }
      .max() ?: 0
  }

  fun part1(list: List<String>) = part(list)
  fun part2(list: List<String>) = part(list, true)
}