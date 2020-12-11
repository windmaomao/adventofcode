# Convert to base 2

```javascript
function toB(n) {
  if (n < 2) return `${n}`
  const re = n % 2
  return toB((n - re) / 2) + `${re}`
}

```

