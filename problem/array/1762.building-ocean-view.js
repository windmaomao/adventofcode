/**
 * @param {number[]} heights
 * @return {number[]}
 */
function findBuildings(heights) {
  let n = heights.length;
  let res = [],
    max = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (max < heights[i]) {
      res.push(i);
      max = heights[i];
    }
  }

  return res.reverse();
}
