# Remove Islands

You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0 s and 1 S. The matrix represents a two-toned image, where each 1 represents black and each o represents white. An island is defined as any number of 1 s that are horizontally or vertically adjacent (but not diagonally adjacent) and that don't touch the border of the image. In other words, a group of horizontally or vertically adjacent 1s isn't an island if any of those 1 are in the first row, last row, first column, or last column of the input matrix.

Naturally, you're allowed to mutate the input matrix.

```bash
  [
    [1, 0, 0, 0, 0, 0], 
    [0, 1, 0, 1, 1, 1], 
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
  ] -> [
    [1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 1, 1, 1], 
    [0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1]   
  ]
```

## Hint

Basically go through corners and try to search valid paths for them.

## Code
```javascript
const a =[
	[1, 0, 0, 0, 0, 0], 
	[0, 1, 0, 1, 1, 1], 
	[0, 0, 1, 0, 1, 0],
	[1, 1, 0, 0, 1, 0],
	[1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 0, 1]
]

const part = (mat) => {
	const m = mat.length
	const n = mat[0].length
	
	const findPath = (i, j) => {
		if (i < 0 || i == m) return
		if (j < 0 || j == n) return
		if (mat[i][j] <= 0) return
		mat[i][j] = -1
		findPath(i - 1, j)
		findPath(i + 1, j)
		findPath(i, j - 1)
		findPath(i, j + 1)
	}
	
	for (let ii = 0; ii < m; ii++) {
		for (let jj = 0; jj < n; jj++) {
			if (ii > 0 && ii < m - 1 && jj > 0 && jj < n - 1) continue
			findPath(ii, jj)
		}
	}
	for (let ii = 0; ii < m; ii++) {
		for (let jj = 0; jj < n; jj++) {
			if (mat[ii][jj] < 0) mat[ii][jj] = 1; else mat[ii][jj] = 0;
		}
	}
	return mat
}

console.log(part(a))

```