package org.adventofcode

fun String.toDecimal(
  base: Int = 10,
  convert: (String) -> Int = { c: String -> c.toInt() }
): Int {
  return this.chunked(1)
    .map(convert)
    .reduce { acc, i -> acc * base + i }
}

fun Int.toBase(
  base: Int = 10,
  convert: (Int) -> String = { c: Int -> c.toString() }
): String {
  if (this < base) return convert(this)

  return (this / base).toBase(base, convert) +
    (this % base).toBase(base, convert)
}