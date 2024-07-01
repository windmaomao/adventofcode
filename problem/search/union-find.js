function unionFind(n) {
  let id = new Array(n).fill(0).map((_, i) => i);
  let size = new Array(n).fill(1);
  let count = id.length;

  function find(p) {
    let i = p;
    while (id[i] != i) i = id[i];
    return i;
  }

  function union(p, q) {
    let [i, j] = [find(p), find(q)];
    if (i == j) return;

    if (size[i] < size[j]) {
      id[i] = j;
      size[j] += size[i];
    } else {
      id[j] = i;
      size[i] += size[j];
    }

    count--;
  }

  function getCount() {
    return count;
  }

  return { id, size, find, union, getCount };
}
