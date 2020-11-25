https://www.geeksforgeeks.org/assign-mice-holes/

```javascript
function assign(mices, holes) {
  const compare = (a ,b) => a - b
  const mm = mices.sort(compare)
  const hh = holes.sort(compare)
  console.log(mm)
  console.log(hh)
  let h = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < mm.length; i++) {
    h = Math.max(h, Math.abs(hh[i] - mm[i]))
  }

  return h
}
```