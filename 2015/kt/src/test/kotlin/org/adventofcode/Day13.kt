package org.adventofcode

class Day13 {
  fun extractSitting(s: String): Triple<String, String, Int> {
    val p0 = s.split(" happiness units by sitting next to ")
    val p1 = p0[0].split(" ")
    val p2 = p0[1].split(".")
    val n = s.extractNumbers()[0]
    val gain = if (s.contains("gain")) n else -n
    return Triple(p1[0], p2[0], gain)
  }

  fun part(
    list: List<String>,
    includeMe: Boolean = false
  ): List<Int> {
    val m: Map = Map()
    list.forEach {
      val (from, to, gain) = extractSitting(it)
      m.addEdge(from, to, gain)
    }
    if (includeMe) m.addNode("me")
    val happiness = { list: List<String> ->
      list.plus(list[0]).windowed(2).map { (p, q) ->
        (m.edges[p]?.get(q) ?: 0) + (m.edges[q]?.get(p) ?: 0)
      }.sum()
    }
    return m.getNodes().permutations().map(happiness)
  }

  fun part1(list: List<String>) = part(list).max()
  fun part2(list: List<String>) = part(list, true).max()
}