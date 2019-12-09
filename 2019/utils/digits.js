const _digits = (n = 0) => {
  return n < 10
    ? [n]
    : [..._digits(Math.floor(n / 10)), n % 10]
}

const digits = (n, total) => {
  const ds = _digits(n).reverse()
  if (!total) return ds

  return new Array(total).fill(0).map((_, i) =>
    i < ds.length ? ds[i] : 0
  )
}
module.exports = digits

// n = 3456
// console.log(digits(n, 5))