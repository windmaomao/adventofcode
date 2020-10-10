import '../../utils/js/array'

const buildMap = strs => strs
  .map(s => {
    const p0 = s.split(" = ")
    const p1 = p0[0].split(" to ")
    return [p1[0], p1[1], parseInt(p0[1])]
  }).reduce((acc, a) => {
    const [from, to, cost] = a
    if (!acc[from]) acc[from] = {}
    acc[from][to] = cost
    if (!acc[to]) acc[to] = {}
    acc[to][from] = cost
    return acc
  }, {})

const mapUtil = locMap => {

  const calcDist = (d, pair) => {
    const [a, b] = pair

    const cs = locMap[a]
    if (!cs) return -1

    const w = cs[b]
    if (!w) return -1

    return d + w
  }

  const pathDist = path => path
    .windowed(2)  // [a, b] [b, c]
    .reduce(calcDist, 0)

  return { calcDist, pathDist }
}

const part1 = locMap => Object
  .keys(locMap)
  .permute()
  .map(mapUtil(locMap).pathDist)
  .filter(v => v > 0)
  .min()

export { buildMap, mapUtil, part1 }

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