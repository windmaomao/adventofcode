package org.adventofcode

fun String.toDecimal(
  convert: (String) -> Int,
  base: Int = 10
): Int {
  return this.chunked(1)
    .map(convert)
    .reduce { acc, i -> acc * base + i }
}