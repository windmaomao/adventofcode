# Sum Of Fibonacci Numbers

How many minimum numbers from fibonacci series are required such that sum of numbers should be equal to a given Number N?

```
  4 -> 2
  7 -> 2
  10 -> 2
  19 -> 3
  513314 -> 11
```

https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/

## Code

```javascript
function fibCount(n) {
  const m = [1]

  let current = 1, prev = 1
  while (current + prev <= n) {
    const nn = current + prev
    m.push(nn)
    prev = current
    current = nn
  }

  let rem = n, res = 0, i = m.length - 1
  while (rem) {
    res += Math.floor(rem / m[i])
    rem = rem % m[i]
    i--
  }

  return res
}
```