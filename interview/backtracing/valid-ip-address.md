# Valid IP Addresses
You're given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses that can be created by inserting three S in the string.

An IP address isn't valid if any of the individual integers contains leading 0 s. For example, "192.168.0.1" a is a valid IP address, but 192.168.00.1" and "192.168.0.01" aren't, because they contain "00" and 01 respectively. Another example of a valid IP address is "99.1.1.10" conversely, "991.1.1.0" isn't valid, because "991" is greater than 255.

```
  "1921680" -> 
  [
    "1.9.216.80",
    "1.92.16.80",
    "1.92.168.0",
    19.2.16.80",
    "19.2.168.0", 
    "19.21.6.80",
    "19.21.68.0,
    "19.216.8.0",
    "192.1.6.80",
    "192.1.68.0",
    "192.16.8.0"
  ]
```

## Hint
  Recursively first find one part given a string and then find one more part against the remaining characters.

## Code
```javascript
function validIPAddresses(str) {
	const res = []
	const rt = str.length
	
	const find = (rf, count, parts) => {
		if (count == 0) { 
			if (rf === rt) res.push(parts.join('.'))
			return 
		}
		if (rt < rf) return
		
		let i = rf, s = []
		while (i < rt) {
			s.push(str[i])
			if (s.length > 3) break
			const ip = parseInt(s.join(''))
			if (ip > 255) break
			find(i+1, count - 1, [...parts, ip])
			if (ip == 0) break
			i++
		}
	}
	
	find(0, 4, [])
	return res
}
```