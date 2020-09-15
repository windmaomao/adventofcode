package org.adventofcode

fun String.extractNumbers(
  includeNegative: Boolean = false
): List<Int> {
  val reg = if (includeNegative) "-?\\d+" else "\\d+"
  return reg.toRegex()
    .findAll(this)
    .map { it.value.toInt() }
    .toList()
}
