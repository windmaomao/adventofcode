# Zigzag Traverse

Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in zigzag order.

Zigzag order starts at the top left corner of the two-dimensional array, goes down by one element, and proceeds in a zigzag pattern all the way to the bottom right corner.

```bash
[
	[1,3,4],
	[2,5,8],
	[6,7,9]
] -> [1,2,3,4,5,6,7,8,9]
```

## Hint

Aim for diagnoals, and solve 
```bash
  i+j = d
  0 =< i <= n - 1
  0 =< j <= m - 1
therefore for each d,
  max(d+1-m, 0) =< i <= min(d, n-1)  
```
## Code

```javascript
const part = (arr) => {
	const n = arr.length, m = arr[0].length
	const dn = n + m - 1, res = []
	
	let dir = false, i = 0, j = 0
	for (let di = 0; di < dn; di++) {
		const dmin = Math.max(0, di +1 - m)
		const dmax = Math.min(n - 1, di)
//		console.log(di, dmin, dmax)
		i = Math.max(i, dmin)
		i = Math.min(i, dmax)
		
		for (let k = dmin; k <= dmax; k++) {
			res.push(arr[i][di - i])
			if (!dir) i++; else i--;
		}

		dir = !dir
	}
	
	return res
}
```
