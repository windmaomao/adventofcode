Array.new = require('./new')
Array.indexes = require('./indexes')

const I = v => v
Array.prototype.sum = function (fn = I) {
  return this.reduce((acc, v, i) => acc + fn(v, i), 0) 
}
Array.prototype.multiply = function (fn = I) {
  return this.reduce((acc, v, i) => acc * fn(v, i), 1) 
}
Array.prototype.min = function (fn = I) {
  return this.reduce((acc, v, i) => Math.min(acc, fn(v, i)), Infinity)
}
Array.prototype.max = function (fn = I) {
  return this.reduce((acc, v, i) => Math.max(acc, fn(v, i)), -Infinity)
}
Array.prototype.vplus = function (arr, fn = I) {
  return this.map((v, i) => v + fn(arr[i], i))
}
Array.prototype.scan = function (fn, seed) {
  return require('./scan')(this, fn, seed)
}
Array.prototype.run = function (fn, init, until) {
  return require('./run')(this, fn, init, until)
}
Array.prototype.runN = function (fn, init, until) {
  return require('./runN')(this, fn, init, until)
}

