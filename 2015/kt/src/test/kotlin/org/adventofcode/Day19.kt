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
}