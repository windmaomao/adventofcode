Array.new = require('./new')
Array.indexes = require('./indexes')
Array.prototype.sum = function (fn) {
  if (!fn) {
    return this.reduce((acc, v) => acc + v, 0)
  } else {
    return this.reduce((acc, v, i) => acc + fn(v, i), 0) 
  }
}
Array.prototype.multiply = function (fn) {
  if (!fn) {
    return this.reduce((acc, v) => acc * v, 1)
  } else {
    return this.reduce((acc, v, i) => acc * fn(v, i), 1) 
  }
}
Array.prototype.scan = function (fn, seed) {
  return require('./scan')(this, fn, seed)
}
Array.prototype.run = function (fn, init, until, limitSteps) {
  return require('./run')(this, fn, init, until, limitSteps)
}
