package org.adventofcode

class Day15 {
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

  fun part1() {
    val configs = listOf(
      listOf(99, 1),
      listOf(88, 12),
      listOf(55, 45)
    )
    val properties = listOf(
      listOf(-1, -2, 6, 3, 8),
      listOf(2, 3, -2, -1, 3)
    )
    configs.map { config ->
      listOf(68, 80, 152, 76)
    }
//    (0..3).map { i ->
//      properties.sumBy {
//        it[i] *
//      }
//    }
  }
}