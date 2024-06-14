// backtracking
function canJump(nums) {
  const n = nums.length;
  let m = {};

  function jump(i) {
    if (i == n - 1) return true;
    if (i >= n) return false;
    if (nums[i] == 0) return false;
    if (i in m) return m[i];

    for (let j = 1; j <= nums[i]; j++) {
      if (jump(i + j)) {
        m[i] = true;
        return true;
      }
    }

    m[i] = false;
    return false;
  }

  return jump(0);
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

// dynamic programming
function canJump(nums) {
  const n = nums.length;
  const res = new Array(n).fill(false);
  res[n - 1] = true;

  for (let i = n - 2; i >= 0; i--) {
    if (i + nums[i] >= n - 1) {
      res[i] = true;
    } else {
      for (let j = 1; j <= nums[i]; j++) {
        res[i] = res[i] || res[i + j];
      }
    }
  }

  return res[0];
}

//
