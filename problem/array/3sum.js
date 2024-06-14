function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    const target = 0 - nums[i];

    let m = {};
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] in m) {
        res.push([nums[i], target - nums[j], nums[j]]);
        while (j + 1 < nums.length && nums[j + 1] == nums[j]) {
          j++;
        }
        continue;
      }
      m[target - nums[j]] = j;
    }
  }

  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0]));
