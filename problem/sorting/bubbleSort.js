function bubbleSort(a) {
  let t;
  for (let i = 0; i < a.length; i++) {
    for (let j = a.length - 1; j > 0; j--) {
      if (a[j] < a[j - 1]) {
        t = a[j - 1];
        a[j - 1] = a[j];
        a[j] = t;
      }
    }
  }
  return a;
}
