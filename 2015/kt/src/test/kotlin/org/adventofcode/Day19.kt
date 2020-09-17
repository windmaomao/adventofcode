package org.adventofcode

typealias Replacements =  List<List<String>>

class Day19 {
  fun extractReplacements(list: List<String>): Replacements {
    return list.map { it.split(" => ") }
  }

  fun regexStr(replacements: Replacements): String {
    return replacements.map { it[0] }.distinct().joinToString("|")
  }

  fun replaceStr(s: String, range: IntRange, r: String): String {
    return s.take(range.first) + r + s.takeLast(s.length - range.last - 1)
  }

  fun allMolecules(s: String, replacements: Replacements): Int {
    return regexStr(replacements)
      .toRegex().findAll(s).flatMap { res ->
        replacements
          .filter { rep -> rep[0] == res.value }
          .map { rep -> replaceStr(s, res.range, rep[1]) }
          .asSequence()
      }.toList().distinct().size
  }

  fun part1(list: List<String>): Int {
    val s = list.last()
    val reps = extractReplacements(list.take(list.size - 2))
    return allMolecules(s, reps)
  }

  // Still not sure how this works :)
  // https://www.reddit.com/r/adventofcode/comments/3xflz8/day_19_solutions/cy4etju/
  fun part2(list: List<String>): Int {
    val s = list.last()
    val reps = extractReplacements(list.take(list.size - 2))

    val t = "Al|Ar|B|C|Ca|F|H|Mg|N|O|P|Rn|Si|Th|Ti|Y"
      .toRegex().findAll(s).toList().size
    val b = "Rn|Ar".toRegex().findAll(s).toList().size
    val c = "Y".toRegex().findAll(s).toList().size
    return t - b - 2 * c - 1
  }
}