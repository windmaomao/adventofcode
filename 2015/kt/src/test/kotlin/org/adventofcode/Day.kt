package org.adventofcode

import java.io.File

open class Day(val name: String) {
  private var _lines: List<String> = listOf()
  var lines: List<String> = listOf()
    get() {
      if (_lines.count() < 1) {
        _lines = File("../res/$name.input").readLines()
      }
      return _lines
    }

  fun getLine(i: Int = 0): String {
    if (lines.count() > i) return lines.get(i)
    return ""
  }

  fun extractNumbers(s: String): List<Int> {
    val pattern = """\d+""".toRegex()
    return pattern.findAll(s).map { it.value.toInt() }.toList()
  }

}