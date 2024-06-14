function Solution(w) {
  this.sum = w.reduce(
    (acc, v) => {
      acc.push(acc[acc.length - 1] + v);
      return acc;
    },
    [0]
  );
  this.sum.shift();
}

Solution.prototype.pickIndex = function () {
  const s = this.sum;
  const target = Math.random() * s[s.length - 1];
  let l = 0,
    r = s.length;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (target > s[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
};

const sln = new Solution([1, 3]);
console.log(sln.sum);
console.log(sln.pickIndex());
