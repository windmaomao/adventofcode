function findPeakElement(nums) {
  const n = nums.length;

  function find(i, j) {
    if (i == j) return i;

    let k = Math.floor((i + j) / 2);
    if (nums[k] > nums[k + 1]) return find(i, k);
    return find(k + 1, j);
  }

  return find(0, n - 1);
}

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([1, 2]));
