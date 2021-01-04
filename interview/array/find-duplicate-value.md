# Find Duplicate Value

Given an array of integers between 1 and inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).

Note that you're allowed to mutate the input array.

https://www.algoexpert.io/questions/First%20Duplicate%20Value

## Hint

If there's `O(1)` in space, the index needs to be stored along with the original array, the additional flag can be modelled as the sign, `-`.

## Code

```javascript
function firstDuplicateValue(arr) {
	let i = 0
	while (i < arr.length) {
		const j = arr[i]
		const v = (j < 0 ? -j : j) - 1
		if (arr[v] < 0) return v + 1
		arr[v] = -arr[v]
		i++
	}
	return -1
}
```