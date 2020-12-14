var gcd = function (a, b) {
  if (!b) return a
  return gcd(b, a % b);
}

var lcm = function (a, b) {
  return a * b / gcd(a, b)
}

module.exports = {
  gcd, lcm
}