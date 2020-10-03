Math.plus = function (a, b) { return a + b }
Math.plusN = function (a, b) {
  return a.map((v, i) => v + b[i])
}
