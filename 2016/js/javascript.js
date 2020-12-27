// Number
Number.prototype.mod = function(n) {
  return ((this % n) + n) % n
}

// Array
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

