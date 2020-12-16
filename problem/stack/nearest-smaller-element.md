# Nearest Smaller Element

Given an array, find the **nearest** smaller element G[i] for every element A[i] in the array such that the element has an **index smaller than i**.

```javascript
[4, 5, 2, 10, 8] -> [-1, 4, -1, 2, 2]
[3, 2, 1] -> [-1, -1, -1]
```

[Interview Bit](https://www.interviewbit.com/problems/nearest-smaller-element/)

## Hint

I don't need history of past min stack once a smallest is found.

## Code

```javascript
const res = A.reduce((acc, p) => {
  const { s, r } = acc

  let found = false
  let n = -1
  while (!found) {
    n = s.empty() ? -1 : s.peek()
    if (p > n) {
      s.push(p)
      found = true
    } else {
      s.pop()
    }
  }

  r.push(n)

  return acc
}, { s: new Stack(), r: [] })

return res.r
```



