function qselect(arr, k) {
  function partition(l, r) {
    let v = arr[r],
      p = l;
    for (let i = l; i <= r; i++) {
      if (arr[i] > v) {
        [arr[i], arr[p]] = [arr[p], arr[i]];
        p++;
      }
    }
    [arr[p], arr[r]] = [arr[r], arr[p]];
    return p;
  }

  function select(l, r) {
    const p = partition(l, r);
    if (k - 1 == p) return;
    if (k - 1 < p) select(l, p - 1, k);
    else select(p + 1, r, k);
  }

  select(0, arr.length - 1);
  return arr;
}
