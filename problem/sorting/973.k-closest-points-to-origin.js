//console.log(qselect([104,80,149,65],3))

function qselect(arr, k) {
  function partition(l, r) {
    const p = Math.floor((l + r) / 2);
    const v = arr[p];
    let i = l,
      j = r;
    while (i <= j) {
      while (arr[i] < v) i++;
      while (arr[j] > v) j--;
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    return i;
  }

  function select(i, j, k) {
    if (i >= j) return;

    const p = partition(i, j);
    const l = p - i;
    if (k == l) return;
    if (k < l) select(i, p - 1, k);
    if (k > l) select(p, j, k - l);
  }

  select(0, arr.length - 1, k);
  return arr;
}

//console.log(qselect([5,2,1,1,6,3,4],6))
console.log(qselect([104, 80, 149, 65], 3));
