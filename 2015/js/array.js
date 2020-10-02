import _ from 'lodash'

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

// Uniqe
Array.prototype.uniqBy = function (iteratee) {
  return _.uniqBy(this, iteratee)
}

// Take
Array.prototype.take = function (n) {
  return _.take(this, n)
}

// TakeWhile
Array.prototype.takeWhile = function (predicate) {
  return _.takeWhile(this, predicate)
}

// Range
Array.prototype.range = function (start) {
  return _.range(start)
}

// Remove
Array.prototype.remove = function () {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
}

// https://github.com/lodash/lodash/issues/1684
function scan(array, fn, seed, thisArg) {
  if (thisArg) fn = fn.bind(thisArg);
  var size = array.length,
    i,
    accumulator,
    results;
  if (seed !== void 0) {
    results = Array(size + 1);
    accumulator = seed;
    for (i = 0; i < size; ++i) {
      results[i] = accumulator;
      accumulator = fn(accumulator, array[i]);
    }
    results[i] = accumulator;
  } else {
    results = Array(size);
    accumulator = results[0] = array[0];
    for (i = 1; i < size; ++i) {
      results[i] = accumulator = fn(accumulator, array[i]);
    }
  }
  return results;
}
Array.prototype.scan = function (fn, seed) {
  return scan(this, fn, seed)
}
