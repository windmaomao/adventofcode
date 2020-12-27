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


//console.log([1,2,3].rsum())
//console.log([1,2,3].rsum(v => v + 1))
//console.log([1,2,3].rsum((v, i) => i))