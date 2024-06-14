/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  const data = [];
  nums.forEach((v, i) => {
    if (v) data.push([i, v]);
  });

  function dotProduct(vec) {
    const data2 = vec.data;
    let i = 0,
      j = 0,
      sum = 0;
    while (i < data.length && j < data2.length) {
      if (data[i][0] == data2[j][0]) {
        sum += data[i][1] * data2[j][1];
        i++;
        j++;
      } else {
        if (data[i][0] < data2[j][0]) {
          i++;
        } else {
          j++;
        }
      }
    }
    return sum;
  }

  return {
    data,
    dotProduct,
  };
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
