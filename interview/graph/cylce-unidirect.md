# Cycle unidirection detect

```
const A = 4
const B = [
  [1,2],
  [2,3],
  [3,4],
] -> false

```

## Code

### Track Path
```javascript
function findCycle(size, connectivity) {
  const conn = {}
  connectivity.forEach(v => {
    const [a, b] = v
    if (!conn[a]) conn[a] = []
    if (!conn[b]) conn[b] = []
    conn[a].push(b)
    conn[b].push(a)
  })

  console.log(conn)

  function canCycle(i) {
    const visited = {}
    const path = [[i, -1]]

    while (path.length) {
//      console.log(path)
      const [j, k] = path.pop()
      visited[j] = true
      if (conn[j] && k+1 < conn[j].length) {
        path.push([j, k+1])
        const next = conn[j][k+1]
        if (visited[next]) {
          if (path.length > 2) {
            if (path[path.length - 2][0] != next)
              return true
          }
        } else {
          path.push([next, -1])
        }
      }
    }

    return false
  }

  for (let ii = 0; ii < connectivity.length; ii++) {
    if (canCycle(connectivity[ii][0])) return true
  }

  return false
}

```

### Assemble Path later

```javascript
function findCycle(size, connectivity) {
  const conn = {}
  connectivity.forEach(v => {
    const [a, b] = v
    if (!conn[a]) conn[a] = []
    if (!conn[b]) conn[b] = []
    conn[a].push(b)
    conn[b].push(a)
  })

  console.log(conn)

  function canCycle(i) {
    const visited = {}
    const stack = [i]
    const crumb = {}

    const path = (start) => {
      const arr = []
      let k = start
      while (k) {
        arr.push(k)
        k = crumb[k]
      }
      return arr
    }

    while (stack.length) {
      const n = stack.pop()
      if (conn[n] && !visited[n]) {
        for (let k = 0; k < conn[n].length; k++) {
          const j = conn[n][k]
          if (!visited[j]) {      // can't have overlap
            stack.push(j)
            crumb[j] = n
          } else {                // end it if overlap
            const d = path(n).indexOf(j)
            if (d > 1) return true
          }
        }
        visited[n] = true
      }
    }

    return false
  }

  for (let ii = 0; ii < connectivity.length; ii++) {
    if (canCycle(connectivity[ii][0])) return true
  }

  return false
}
```