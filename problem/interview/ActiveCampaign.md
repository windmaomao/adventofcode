# ActiveCampaign Interview
## Question 1
Extract variable out of a string, ex. `hi, %name-abc:upper%`.
```js
const pattern = /\%([a-z0-9-:]*?)\%/g

const str = "%fullname::upper%"
const matches = str.match(pattern)
const res = [...matches]
  .map(m => {
    const s = m.substring(1, m.length - 1)
    const parts = s.split(':')
    if (parts.length > 2) return ''
    return parts[0]
  }).reduce((acc, s) => {
    if (acc.indexOf(s) < 0) acc.push(s)
    return acc
  }, []).filter(s => !!s)


console.log(res)
```
## Question 2
Make sure an array can be partitioned into section with equal length of `k`. All the partition should have unique values. 
```js
function partitionArray(k, numbers) {
  const n = numbers.length
  if (n % k != 0) return false
  
  const arr = numbers.sort((a, b) => a - b)
  const m = {}
  for (let i = 0; i < n; i++) {
    const j = arr[i]
    if (!m[j]) m[j] = 0
    m[j]++
  }
  console.log(m)

  const ns = Object.values(m)
  let possible = true, i = 0
  while (possible) {
    if (ns[i]) {
      ns[i]--
    } else {
      i++
      if (i == ns.length) i = 0
    }
    possible = ns.some(v => v > 0)
  }
  return possible
}

const A = 3
const B = [4,4,6,8,8,8]
```