# Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

```bash
  [3,5,-4,8,11,1,-1,6], 10 -> [-1,11]
```

https://www.algoexpert.io/questions/Two%20Number%20Sum

## Hint

Two version,

- use Hash to gain `O(n)`, caution: only add hash after the match to avoid over-match
- sort the array `O(nlogn)` and use first and last index to find the match going inward. 

## Code

### Hash

```javascript
function twoNumberSum(arr, target) {
	const m = {}
	
	for (let i = 0; i < arr.length; i++) {
		const s = target - arr[i]
		if (m[s]) {
			return [arr[i], s]
		} else {
			m[arr[i]] = true
		}
	}
	
	return []
}
```

### Bound

```javascript
function twoNumberSum(array, target) {
	const arr = array.sort((a, b) => a - b)
	let i = 0, j = arr.length - 1
	const res = []
	
	while (i < j) {
		const s = arr[i] + arr[j]
		if (s == target) {
			res.push(arr[i], arr[j])
		}
		if (s > target) j--; else i++
	}
	
	return res
}
```