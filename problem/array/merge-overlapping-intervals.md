# Merge Overlapping Intervals

Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

```
  [[1,2],[3,5],[4,7],[6,8],[9,10]] -> 
  [[1,2],[3,8],[9,10]]
```

## Hint
sort the ranges and then assemble them

## Code
```javascript
function mergeOverlappingIntervals(arr) {
	const sorted = arr.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1]
		return a[0] - b[0]
	})
  
	const n = arr.length
	const res = [sorted[0]]
	let i = 1
	while (i < n) {
		const ra = res[res.length - 1]
		const rb = sorted[i]
		
		if (ra[1] >= rb[0]) {
			if (rb[1] > ra[1]) ra[1] = rb[1]
		} else {
			res.push(rb)
		}
		
		i++
	}
	return res  
}
```