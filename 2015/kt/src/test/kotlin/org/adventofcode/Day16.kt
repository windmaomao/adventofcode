package org.adventofcode

class Day16 {
  fun extractSue(s: String): HashMap<String, Int> {
    val m: HashMap<String, Int> = hashMapOf()
    "\\w+: \\d+".toRegex().findAll(s).forEach {
      val parts = it.value.split(": ")
      m.put(parts[0], parts[1].toInt())
    }
    return m
  }

  val sue = extractSue("""
    children: 3
    cats: 7
    samoyeds: 2
    pomeranians: 3
    akitas: 0
    vizslas: 0
    goldfish: 5
    trees: 3
    cars: 2
    perfumes: 1    
  """.trimIndent())

  fun part1(str: List<String>): Int {
    return str.map {
      extractSue(it).all { (key, n) -> sue[key] == n }
    }.indexOf(true) + 1
  }

  fun part2(str: List<String>): Int {
    return str.map {
      extractSue(it).all { (key, n) ->
        when (key) {
          "cats", "trees" -> { n > (sue[key] ?: 0) }
          "pomeranians", "goldfish" -> { n < (sue[key] ?: 100) }
          else -> { sue[key] == n }
        }
      }
    }.indexOf(true) + 1
  }


}