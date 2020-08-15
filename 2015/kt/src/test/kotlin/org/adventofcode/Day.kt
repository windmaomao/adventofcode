package org.adventofcode

import java.io.File

open class Day(val name: String) {

  fun loadRes(): String {
    val fn = "../res/$name.input"
    val lines: List<String> = File(fn).readLines()
    return lines.first()
  }

}