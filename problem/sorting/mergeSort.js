function mergeSort(a) {
  function sort(i, j) {
    if (i == j) return [];
    if (j - 1 == i) return [a[i]];

    let k = Math.ceil((i + j) / 2);
    const left = sort(i, k);
    const right = sort(k, j);

    let b = [],
      p = 0,
      q = 0;
    while (p < left.length && q < right.length) {
      if (left[p] <= right[q]) {
        b.push(left[p]);
        p++;
      } else {
        b.push(right[q]);
        q++;
      }
    }
    while (p < left.length) {
      b.push(left[p]);
      p++;
    }
    while (q < right.length) {
      b.push(right[q]);
      q++;
    }
    return b;
  }

  return sort(0, a.length);
}
