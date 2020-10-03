import _ from 'lodash'

// New
Array.new = function (n, v) {
  return new Array(n).fill(v)
}

// Range
Array.range = function (start, end) {
  return _.range(start, end)
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
Array.prototype.range = function () {
  const [start, end] = this
  return _.range(start, end)
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

Array.prototype.flatMap = function (fn) {
  return _.flatMap(this, fn)
}

Array.prototype.apply = function (fn) {
  return fn(this)
}

Array.prototype.max = function () {
  return Math.max(...this)
}

Array.prototype.min = function () {
  return Math.min(...this)
}

Array.prototype.count = function (fn) {
  if (typeof fn === 'function') return this.filter(fn).length
  return this.filter(v => v === fn).length
}

Array.prototype.chunk = function (n) {
  return _.chunk(this, n)
}

// [0, 1, 2, 3] => [0, 2], [1, 3]
Array.prototype.chunkMod = function (n) {
  return _.range(n).map(i => this
    .filter((_, j) => j % n == i)
  )
}