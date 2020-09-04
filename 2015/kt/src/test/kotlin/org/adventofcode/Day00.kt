package org.adventofcode

import java.io.File

fun parseFile(name: String): List<String> =
  File("../res/$name.input").readLines()

fun String.extractNumbers(): List<Int> =
  """\d+""".toRegex()
    .findAll(this)
    .map { it.value.toInt() }
    .toList()
