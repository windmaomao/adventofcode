function myPow(x, n) {
  function pow(n) {
    if (n == 1) return x;
    if (n % 2 == 0) {
      let t = pow(n / 2);
      return t * t;
    }
    return x * pow(n - 1);
  }

  if (n == 0) return 1;
  return n > 0 ? pow(n) : 1 / pow(-n);
}

console.log(myPow(2, 2));
console.log(myPow(2, -2));
