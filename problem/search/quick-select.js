function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr, low, high) {
  let i = low,
    j = high + 1;
  const v = arr[low];

  while (true) {
    while (arr[++i] < v) {
      if (i == high) break;
    }
    while (arr[--j] >= v) {
      if (j == low) break;
    }
    if (i >= j) break;

    swap(arr, i, j);
  }
  swap(arr, low, j);

  return j;
}

function quickselect(arr, kk) {
  const k = kk - 1;
  const sort = (low, high) => {
    if (low >= high) return;
    const j = partition(arr, low, high);
    console.log(j, arr);
    const i = low + j;
    if (k == i) return;
    if (k < i) sort(low, j - 1);
    if (k > i) sort(j + 1, high);
  };

  sort(0, arr.length - 1);
  return arr[k];
}

console.log(quickselect([8, 5, 2, 9, 7, 6, 3], 3));

//console.log(partition([8,5,2,9,7,6,3], 6, 6))

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
    if (k == 0) return;
    if (i >= j) return;

    const p = partition(i, j);
    const l = p - 1 - i + 1;
    if (k <= l) select(i, p - 1, k);
    if (k > l + 1) select(p + 1, j, k - l - 1);
  }

  select(0, arr.length - 1, k);
  return arr;
}

console.log(qselect([5, 2, 1, 1, 6, 3, 4], 6));

//
function qselect(arr, k) {
  if (k == 0) return arr;
  if (arr.length < 2) return arr;

  const [head, ...rest] = arr;
  const left = rest.filter((v) => v[2] <= head[2]);
  const right = rest.filter((v) => v[2] > head[2]);
  const leftSort = k <= left.length ? qselect(left, k) : left;
  const rightSort =
    k > left.length + 1 ? qselect(right, k - left.length - 1) : right;

  return [...leftSort, head, ...rightSort];
}
