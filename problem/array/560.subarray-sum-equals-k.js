function subarraySum(nums, k) {
  let res = new Array(nums.length).fill(0);
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    res[i] = s;
  }

  let count = 0,
    m = {};
  for (let i = 0; i < nums.length; i++) {
    const target = res[i] - k;
    if (target in m) count += m[target];
    if (target == 0) count++;

    m[res[i]] = m[res[i]] || 0;
    m[res[i]]++;
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([-2, -1, 1, -1, 4, 2, 3], 3));
