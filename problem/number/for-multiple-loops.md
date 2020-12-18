# For multiple loops

This appears if you want to count number in digits, or want to write multiple nested loop for a vector in multiple dimensions.

```
[0, 0]
[0, 1]
[1, 0]
[1, 1]
```

## Hint

Sometimes, you want to have an extra border buffer, you can set `b` to `1`. 

## Code

```javascript
const forM = (sizes, fn, b = 0) => {
	const n = sizes.length
  
	const low = i => sizes[i][0] - b
	const high = i => sizes[i][1] + b
	
	const c = sizes.map((_, i) => low(i))
	let hasDigit = false
	while (!hasDigit) {
		fn(c.slice())
		hasDigit = true
		let i = 0
		while (hasDigit && i < n) {
			c[i]++
			if (c[i] > high(i)) { c[i] = low(i); i++ } 
			else { hasDigit = false }
		}
	}
}

visit([[0, 1], [0, 1]], console.log)
```

