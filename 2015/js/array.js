const _ = require('lodash')

// New
Array.new = function (n, v) {
  return new Array(n).fill(v)
}

// Transform
Array.prototype.transform = function (iter, acc) {
  return _.transform(this, iter, acc)
}

// Sum
const sum = d => {
  if (d) return (acc, s) => acc + d(s)
  return (acc, s) => acc + s
}
Array.prototype.sum = function (predicate) {
  return _.reduce(this, sum(predicate), 0)
}
