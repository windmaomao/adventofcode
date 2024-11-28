// [].new(n)
Array.prototype.new = function (n) {
  return new Array(n).fill(0);
};

// a.max()
Array.prototype.max = function (n) {
  return Math.max(...this);
};

// a.min()
Array.prototype.min = function (n) {
  return Math.min(...this);
};

// a.take(3)
Array.prototype.take = function (n) {
  return this.slice(0, n);
};

// a.sum()
// a.sum((v, i) => v + fn(i))
Array.prototype.sum = function (fn) {
  if (!fn) {
    return this.reduce((acc, v) => acc + v, 0);
  } else {
    return this.reduce((acc, v, i, arr) => acc + fn(v, i, arr), 0);
  }
};

// a.multiply()
// a.multiply((v, i) => v + fn(i))
Array.prototype.multiply = function (fn) {
  if (!fn) {
    return this.reduce((acc, v) => acc * v, 1);
  } else {
    return this.reduce((acc, v, i, arr) => acc * fn(v, i, arr), 1);
  }
};

Array.prototype.split = function (separator = "") {
  let arr = this;
  let res = [],
    tmp = [];
  for (let i = 0; i < arr.length; i++) {
    if (separator == arr[i]) {
      res.push(tmp);
      tmp = [];
    } else {
      tmp.push(arr[i]);
    }
  }
  if (tmp.length) res.push(tmp);
  return res;
};
