function staircaseTraversal(height, maxSteps) {
  function numOfWays(n) {
    if (n < 0) return 0;
    if (n == 0) return 1;

    let s = 0;
    for (let i = 1; i <= maxSteps; i++) {
      s += numOfWays(n - i);
    }
    return s;
  }

  return numOfWays(height);
}
