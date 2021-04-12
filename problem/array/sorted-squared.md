# Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

https://www.algoexpert.io/questions/Sorted%20Squared%20Array

```
  [-10,-5,0,5,10] -> [0,25,25,100,100]

```

## Hint
Find the middle zero and go from there.
## Code

```javascript
function sortedSquaredArray(arr) {
	const n = arr.length
	let o = 0
	while (o < n && arr[o] < 0) o++
	
	let p = o - 1, q = o
	const res = []
	const pick = forward => {
		if (forward) {
			res.push(arr[q]*arr[q])
			q++
		} else {
			res.push(arr[p]*arr[p])
			p--
		}
	}
	while (res.length < n) {
		if (p < 0) {
			pick(true)
		} else if (q >= n) {
			pick(false)
		} else {
			pick(arr[q]*arr[q] < arr[p]*arr[p])
		}
	}
  return res;
}
```