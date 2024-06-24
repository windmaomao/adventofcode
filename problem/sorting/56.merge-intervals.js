function quickSort(arr, val = (v) => v) {
  function sort(i, j) {
    if (i < 0 || i >= j) return;
    const p = partition(i, j);
    sort(i, p - 1);
    sort(p + 1, j);
  }

  function swap(i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  function partition(l, r) {
    const v = val(arr[r], r);
    let p = l;
    for (let i = l; i <= r - 1; i++) {
      if (val(arr[i], i) < v) swap(i, p++);
    }
    swap(p, r);
    return p;
  }

  sort(0, arr.length - 1);
  return arr;
}

//console.log(quickSort([3,1,2,5,2,9,8]))
//console.log(quickSort([[1,3],[4,6],[3,10]], v => v[0]))

function merge(intervals) {
  quickSort(intervals, (v) => v[0]);
  let p = intervals[0],
    i = 1,
    res = [];
  while (i < intervals.length) {
    if (intervals[i][0] <= p[1]) {
      p[1] = Math.max(p[1], intervals[i][1]);
    } else {
      res.push(p);
      p = intervals[i];
    }
    i++;
  }
  if (p) res.push(p);
  return res;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
