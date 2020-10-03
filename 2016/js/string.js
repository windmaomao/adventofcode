String.prototype.extractNumbers = function(includeNegative = false) {
  const regex = /\d+/g
  return this.match(regex).map(v => parseInt(v, 10))
}

// fun String.extractNumbers(
//   includeNegative: Boolean = false
// ): List<Int> {
//   val reg = if (includeNegative) "-?\\d+" else "\\d+"
//   return reg.toRegex()
//     .findAll(this)
//     .map { it.value.toInt() }
//     .toList()
// }
