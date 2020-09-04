package org.adventofcode

import java.io.File

fun parseFile(name: String) =
  File("../res/$name.input").readLines()