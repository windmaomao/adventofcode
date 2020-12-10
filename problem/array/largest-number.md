# Largest number

Given a list of non negative integers, arrange them such that they form the largest number.
https://www.interviewbit.com/problems/largest-number/

```
const A = [3, 30, 34, 5, 9]

const compare = (n1, n2) => {
  const s1 = parseInt(`${n1}${n2}`, 10)
  const s2 = parseInt(`${n2}${n1}`, 10)
  return s2 - s1
}

A.sort(compare);

console.log(A)
```