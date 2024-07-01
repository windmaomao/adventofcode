/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  function swap(p, q) {
    const t = nums[p];
    nums[p] = nums[q];
    nums[q] = t;
  }

  let i = nums.length - 2;
  while (nums[i] >= nums[i + 1]) i--;
  if (i < 0) return nums.reverse();

  let j = nums.length - 1;
  while (nums[j] <= nums[i]) j--;
  if (j < 0) return nums.reverse();

  swap(i, j);
  i++;
  j = nums.length - 1;
  while (i < j) {
    swap(i, j);
    i++;
    j--;
  }

  return nums;
}
