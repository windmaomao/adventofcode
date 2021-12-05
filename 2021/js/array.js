const _ = require('./lodash')

// [].new(n)
Array.prototype.new = function (n) {
  return new Array(n).fill(0)
}

// [].range(2)
Array.prototype.range = function (from, to, step) {
  return _.range(from, to, step)
}

// a.clone()
Array.prototype.clone = function() {
  return this.map(v => {
    if (Array.isArray(v)) return v.clone()
    if (typeof v === 'object') return { ...v }
    return v
  })
}

// a.sum()
// a.sum((v, i) => v + fn(i))
Array.prototype.sum = function (fn) {
  if (!fn) {
    return this.reduce((acc, v) => acc + v, 0)
  } else {
    return this.reduce((acc, v, i, arr) => acc + fn(v, i, arr), 0)
  }
}

// a.multiply()
// a.multiply((v, i) => v + fn(i))
Array.prototype.multiply = function (fn) {
  if (!fn) {
    return this.reduce((acc, v) => acc * v, 1)
  } else {
    return this.reduce((acc, v, i, arr) => acc * fn(v, i, arr), 1) 
  }
}

// a.uniq()
// a.uniq((v, i) => ...)
Array.prototype.uniq = function (fn) {
  const m = new Map()
  return this.filter((v, i) => {
    const v2 = fn ? fn(v, i) : v
    const hasTaken = !!m[v2]
    if (!hasTaken) {
      m[v2] = true
      return true
    }
    return false
  })
}