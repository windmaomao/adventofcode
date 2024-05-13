let n = 7;
let MAX = 1000000;

// dist[i][j] represents shortest distance to go from i to j
// this matrix can be calculated for any given graph using
// all-pair shortest path algorithms
let dist = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 22, 30, 0, 24, 0, 0],
  [0, 22, 0, 0, 22, 0, 0, 0],
  [0, 30, 0, 0, 0, 18, 0, 10],
  [0, 0, 22, 0, 0, 12, 38, 0],
  [0, 24, 0, 18, 12, 0, 10, 0],
  [0, 0, 0, 0, 38, 10, 0, 10],
  [0, 0, 0, 10, 0, 0, 10, 0],
];

// memoization for top down recursion
let memo = new Array(n + 1);

for (let i = 0; i < memo.length; i++) {
  memo[i] = new Array(1 << (n + 1)).fill(0);
}

function fun(i, mask) {
  // base case
  // if only ith bit and 1st bit is set in our mask,
  // it implies we have visited all other nodes already
  if (mask == ((1 << i) | 3)) return dist[1][i];

  // memoization
  if (memo[i][mask] != 0) return memo[i][mask];

  let res = 0; // result of this sub-problem

  // we have to travel all nodes j in mask and end the
  // path at ith node so for every node j in mask,
  // recursively calculate cost of travelling all nodes in
  // mask except i and then travel back from node j to
  // node i taking the shortest path take the minimum of
  // all possible j nodes

  for (let j = 1; j <= n; j++)
    if (mask & (1 << j) && j != i && j != 1)
      res = Math.max(res, fun(j, mask & ~(1 << i)) + dist[j][i]);
  return (memo[i][mask] = res);
}

// Driver program to test above logic
let ans = 0;
// for (let i = 1; i <= n; i++)
// try to go from node 1 visiting all nodes in
// between to i then return from i taking the
// shortest route to 1
ii = 2;
ans = Math.max(ans, fun(ii, (1 << (n + 1)) - 1) + dist[ii][1]);

console.log("The cost of most efficient tour " + ans);
