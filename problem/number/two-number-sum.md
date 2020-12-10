# Two Number Sum
Write a function that takes distinct integers and output two numbers that sum up to the target sum.
```bash
[3,5,-4,8,11,1,-1,6] and target 10 => [-1,11]
```
## Hint
Use hash to check if a number exists.
## Code
```
function twoNumberSum(arr, target) {
  const m = {}
  for (const i of arr) {
    m[i] = true
    const k = target - i
    if (m[k]) return [i, k]
  }
  return []
  ```
}

