# Subarray Sort

Write a function that takes in an array of at least two integers and that returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted (in ascending order).

If the input array is already sorted, the function should return [-1, -1].

https://www.algoexpert.io/questions/Subarray%20Sort

```bash
 [1,2,4,7,10,11,7,12,6,7,16,18,19] -> [3,9]
```

## Hint

track two index, one for the regular index, and another one for the sorted index.

## Code

```javascript
const left = (arr) => {
	const n = arr.length
	let i = 1
	while (i < n && arr[i] >= arr[i-1]) i++
	let k = i - 1
	while (i < n) {
		while (arr[i] < arr[k] && k >= 0) k--
		i++
	}
	k++
	return k == n ? -1 : k
}

const right = (arr) => {
	const n = arr.length
	let i = n - 2
	while (i >= 0 && arr[i+1] >= arr[i]) i--
	let k = i + 1
	while (i >= 0) {
		while (arr[i] > arr[k] && k < n) k++
		i--
	}
	k--
	return k
}


console.log(a)
console.log(left(a))
console.log(right(a))

```