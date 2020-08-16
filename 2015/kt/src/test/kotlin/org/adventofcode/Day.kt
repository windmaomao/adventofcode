package org.adventofcode

import java.io.File

open class Day(val name: String) {
  var lines: List<String> =
    File("../res/$name.input").readLines()

  fun getLine(i: Int = 0): String {
    if (lines.count() > i) return lines.get(i)
    return ""
  }
}