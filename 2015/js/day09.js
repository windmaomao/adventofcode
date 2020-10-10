

const pathDist = locMap => path => path
  .window(2)
  .sum(dist(locMap))

const part1 = locMap => locMap
  .keys()
  .permute()
  .map(pathDist)
  .min()

// package org.adventofcode
//
// class Day09 {
//   fun extractRoute(s: String): Triple<String, String, Int> {
//     val p0 = s.split(" = ")
//     val p1 = p0[0].split(" to ")
//     return Triple(p1[0], p1[1], p0[1].toInt())
//   }
//
//   fun part(list: List<String>): List<Int> {
//     val m: Map = Map()
//     list.forEach {
//       val (from, to, cost) = extractRoute(it)
//       m.addEdge(from, to, cost)
//       m.addEdge(to, from, cost)
//     }
//     val listCost = { list: List<String> -> list
//       .windowed(2)
//       .sumBy { (from, to) -> m.edges[from]?.get(to) ?: 1000 }
//     }
//     return m.getNodes().permutations().map(listCost)
//   }
//
//   fun part1(list: List<String>) = part(list).min()
//   fun part2(list: List<String>) = part(list).max()
// }