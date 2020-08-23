package org.adventofcode

import java.io.File

open class Day(val name: String) {
  private var _lines: List<String> = listOf()
  var lines: List<String> = listOf()
    get() {
      loadRes()
      return _lines
    }

  fun loadRes() {
    if (_lines.count() < 1) {
      _lines = File("../res/$name.input").readLines()
    }
  }

  fun getLine(i: Int = 0): String {
    if (lines.count() > i) return lines.get(i)
    return ""
  }

}