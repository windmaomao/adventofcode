Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
}

Number.isNumber = n => /^-?[\d.]+(?:e-?\d+)?$/.test(n)
