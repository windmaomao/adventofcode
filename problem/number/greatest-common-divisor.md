# Greatest common divisor

```javascript
var gcd = function (a, b) {
  if (!b) return a
  return gcd(b, a % b);
}
```

