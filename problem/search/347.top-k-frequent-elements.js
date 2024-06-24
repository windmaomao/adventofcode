/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  function qselect(l, r) {
    if (l < 0 || l >= r) return;
    const p = partition(l, r);
    const count = arr.length - p;
    if (count == k) return;
    if (k > count) qselect(l, p - 1);
    else qselect(p + 1, r);
  }

  const swap = (i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  };

  const value = (v) => m.get(v);
  function partition(l, r) {
    let p = l;
    for (let i = l; i <= r - 1; i++) {
      if (value(arr[i]) < value(arr[r])) {
        swap(i, p++);
      }
    }
    swap(p, r);
    return p;
  }

  const m = new Map();
  nums.forEach((v) => {
    if (m.has(v)) m.set(v, m.get(v) + 1);
    else m.set(v, 1);
  });

  const arr = Array.from(m.keys());
  qselect(0, arr.length - 1);
  return arr.slice(-k);
}
