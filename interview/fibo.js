## Code

```javascript
function f(n) {
  if (n < 1) return [0, 0]
  if (n < 2) return [1, 0]

  const [c, p] = f(n-1)
  return [c+p, c]
}
```

```haskel
import Data.Array

fib max = go max
  where go 0 = 0
        go 1 = 1
        go n = arr ! (n-1) + arr ! (n - 2)
        arr = array (0, max) [(i, go i) | i <- [0..max]]
```
