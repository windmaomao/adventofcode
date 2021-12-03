// a.new(n)
Array.prototype.new = function (n) {
  return new Array(n).fill(0)
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

// a.range(2)
// a.range(1, 4)
// a.range(1, -1)
Array.prototype.range = function (from, to) {
  if (to === undefined) {
    to = from
    from = 0
  }
  if (to < 0) {
    to += this.length
  }
  const arr = []
  for (let i = from; i < to; i ++) {
    arr.push(this[i])
  }
  return arr
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