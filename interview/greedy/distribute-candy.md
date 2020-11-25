# Distribute Candy

There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

1. Each child must have at least one candy.
2. Children with a higher rating get more candies than their neighbors.

What is the minimum candies you must give?

```
  [1,2] -> 3
  [1,5,2,1] -> 7
```

## Notes

basically make sure neighbors is higher

### Code

```javascript
function distribute(ratings) {
  const n = ratings.length
  const M = Number.MIN_SAFE_INTEGER

  const arr = ratings.slice()
  arr.unshift(M)
  arr.push(M)

  const candies = new Array(n+2).fill(0)

  let done = false
  while (!done) {
    let changed = false
    for (let i = 1; i < n + 1; i++) {
      const tmp = candies[i]
      candies[i] = Math.max(
        candies[i],
        arr[i] > arr[i-1] ? candies[i-1] + 1 : 1,
        arr[i] > arr[i+1] ? candies[i+1] + 1 : 1
      )
      if (tmp != candies[i]) changed = true
    }
    if (!changed) done = true
  }

  return candies.reduce((acc, v) => acc + v, 0)
}
```