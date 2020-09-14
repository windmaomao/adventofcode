package org.adventofcode

fun String.extractNumbers(): List<Int> =
  """\d+""".toRegex()
    .findAll(this)
    .map { it.value.toInt() }
    .toList()
