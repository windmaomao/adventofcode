package org.adventofcode

import java.io.File

open class Day(val name: String) {
  var lines: List<String> = listOf()

  fun loadRes() {
    if (lines.count() < 1) {
      lines = File("../res/$name.input").readLines()
    }
  }

  fun getLine(i: Int = 0): String {
    loadRes()
    if (lines.count() > i) return lines.get(i)
    return ""
  }

}