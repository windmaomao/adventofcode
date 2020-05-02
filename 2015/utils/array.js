import _ from 'lodash'

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

// Uniqe
Array.prototype.uniqBy = function (iteratee) {
  return _.uniqBy(this, iteratee)
}

// TakeWhile
Array.prototype.takeWhile = function (predicate) {
  return _.takeWhile(this, predicate)
}

// Range 
Array.prototype.range = function (start) {
  return _.range(start)
}
