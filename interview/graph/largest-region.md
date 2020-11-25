# Region in BinaryMatrix

Given a binary matrix A of size N x M.

Cells which contain 1 are called filled cell and cell that contain 0 are called empty cell.

Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally.

If one or more filled cells are also connected, they form a region. Find the length of the largest region.

```
[  [0, 0, 1, 1, 0]
   [1, 0, 1, 1, 0]
   [0, 1, 0, 0, 0]
   [0, 0, 0, 0, 1]
] -> 6

[  [1, 1, 1]
   [0, 0, 1]
] -> 4

```

## Code

### Recursive

```javascript
function largestRegion(block) {
  const m = block.length
  const n = block[0].length
  const visited = {}
  const pos = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ]

  const key = (i,j) => `${i}:${j}`

  const search = (i, j) => {
    let mm = 0
    visited[key(i, j)] = true

    for (let k = 0; k < pos.length; k ++) {
      const ii = i + pos[k][0], jj = j + pos[k][1]
      if (ii < 0 || jj < 0) continue
      if (ii == m || jj == n) continue
      if (!block[ii][jj]) continue
      if (visited[key(ii, jj)]) continue
      mm += search(ii, jj)
    }

    return mm + 1
  }

  let largest = 0
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (block[i][j] && !visited[key(i,j)]) {
        largest = Math.max(largest, search(i, j))
      }
    }
  }

  return largest
}

const A = [
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [1, 0, 0, 0],
]

console.log(largestRegion(A))
```

### Stack
```javascript
function largestRegion(block) {
  const m = block.length
  const n = block[0].length
  const visited = {}
  const pos = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ]

  const key = (i,j) => `${i}:${j}`

  const regionSize = (i0, j0) => {
    const steps = [[i0, j0, -1]]
    const visited2 = {}
    while (steps.length) {
      let [i, j, k] = steps[steps.length - 1]
      visited[key(i, j)] = true
      visited2[key(i, j)] = true

      k++  // starting -1
      if (k < pos.length) {
        const ii = i + pos[k][0], jj = j + pos[k][1]
        if ( ii < 0 || jj < 0
          || ii == m || jj == n
          || !block[ii][jj]
          || visited[key(ii, jj)]
        ) {
          steps[steps.length - 1][2] = k
        } else {
          steps.push([ii, jj, -1])
        }
      } else {
        steps.pop()
      }
    }

    return Object.keys(visited2).length
  }

  let largest = 0
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (block[i][j] && !visited[key(i,j)]) {
        largest = Math.max(largest, regionSize(i, j))
      }
    }
  }

  return largest
}
```