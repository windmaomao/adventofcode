# Largest Rectangle in Histogram

Given an array of integers **A** of size **N**. **A** represents a histogram i.e **A[i]** denotes height of 
 the **ith** histogram’s bar. Width of each bar is **1**. Find the area of largest rectangle in the histogram.

[Interview Bit](https://www.interviewbit.com/problems/largest-rectangle-in-histogram/)

[Medium Explanation](https://medium.com/@dimko1/largest-rectangle-in-histogram-bbd7c1e1158)

https://www.danielleskosky.com/largest-rectangle-in-histogram/

## Hint

if next item is smaller, then the information can be gathered up til now

## Code

```javascript
const arr = [ 90, 58, 69, 70, 82, 100, 13, 57, 47, 18 ]
const ps = new Stack([-1])

const res = arr.reduce((acc, p, i, a) => {
  const { s } = acc

  while ((s.peek() != -1) && a[s.peek()] >= p) {
    const j = s.pop()
    const pk = s.peek()
    acc.r = Math.max(acc.r, a[j] * (i - 1 - pk))
  }
  s.push(i)

  if (i == a.length - 1) {
    while ((s.peek() != -1)) {
      const j = s.pop()
      const pk = s.peek()
      acc.r = Math.max(acc.r, a[j] * (a.length - pk - 1))
    }
  }

  return acc
}, { s: ps, r: 0 })

console.log(res)
```

