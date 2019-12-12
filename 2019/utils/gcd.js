// Greatest common divisor

function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

module.exports = gcd

// console.log(gcd(10, 15))