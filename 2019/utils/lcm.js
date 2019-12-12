// Least common multiple

function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

module.exports = lcm

// console.log(lcm(10,15))