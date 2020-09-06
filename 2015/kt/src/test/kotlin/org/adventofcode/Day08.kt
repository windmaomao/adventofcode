package org.adventofcode

class Day08() {
  val memory = { str: String ->
    str
      .replace(Regex("""^""""), "")
      .replace(Regex(""""$"""), "")
      .replace(Regex("""\\[\"\\]"""), " ")
      .replace(Regex("""\\x.."""), " ")
  }

  val diff = { str: String ->
    str.length - memory(str).length
  }

  fun part1(str: List<String>): Int {
    return str.map(diff).sum()
  }
}
