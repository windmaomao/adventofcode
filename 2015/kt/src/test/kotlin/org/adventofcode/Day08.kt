package org.adventofcode

class Day08() {
  val diff = { str: String ->
    val real = str
      .replace(Regex("""^""""), "")
      .replace(Regex(""""$"""), "")
      .replace(Regex("""\\[\"\\]"""), " ")
      .replace(Regex("""\\x.."""), " ")
    str.length - real.length
  }

  val diff2 = { str: String ->
    val real = str
      .replace(Regex("""[\\\"]"""), "  ")
    real.length - str.length + 2
  }

  private fun part(list: List<String>, fn: (String) -> Int): Int {
    return list.map(fn).sum()
  }

  fun part1(str: List<String>) = part(str, diff)
  fun part2(str: List<String>) = part(str, diff2)

}
