# Largest Range

Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of integers contained in that array.

The first number in the output array should be the first number in the range, while the second number should be the last number in the range.

A range of numbers is defined as a set of numbers that come right after each other in the set of real integers. For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5. Note that numbers don't need to be sorted or adjacent in the input array in order to form a range. You can assume that there will only be one largest range.

```bash
  [1,11,3,0,15,5,2,4,10,7,12,6] -> [0, 7]
```

https://www.algoexpert.io/questions/Largest%20Range

## Hint

Use hash to store numbers and then starting with one number and expand to nearby numbers to figure out the total length and range.

## Code
```javascript
const a = [1,11,3,0,15,5,2,4,10,7,12,6]

const part = arr => {
	const m = {}
	
	arr.forEach(v => { m[v] = false })
	
	const calc = (v) => {
		if (m[v] === undefined) return [0, [v, v]]
		if (m[v]) return [0, [v, v]]
		m[v] = true
		const l = calc(v - 1)
		const r = calc(v + 1)
		return [1 + l[0] + r[0], [v - l[0], v + r[0]]]
	}
	
	let c = -Infinity, res = [-1, -1]
	arr.forEach(v => {
		const r = calc(v)
		if (r[0] > c) {
			c = r[0]; res = r[1]
		}
	})
	return res
}

console.log(part(a))

```
