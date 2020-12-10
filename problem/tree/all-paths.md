# All paths between two nodes
Given a graph, find the possible paths from one place to another, ex. find  `7` to `0`.
```bash
7 -> 4
4 -> 3, 2, 1
3 -> 2, 1, 0
2 -> 1, 0
1 -> 0
```
![][image-1]

## Code
```js
const allPaths = graph => {
  const from = '7', to = '0'
  const crumbs = {}, visited = {}
  const res = [], path = [from]
  
  const visit = n => {
    visited[n] = true
    
    if (n == to) {
      res.push([...path])
    } else {
      const nexts = graph[n]
      if (nexts) {
        for (let i = 0; i < nexts.length; i++) {
          const next = nexts[i]
          if (!visited[next]) {
            path.push(next)
            visit(next)
            path.pop()
          }
        }
      }
    }

    visited[n] = false
  }

  visit('7')
  return res
}

const A = {
  '7': ['4'],
  '4': ['3', '2', '1'],
  '3': ['2', '1', '0'],
  '2': ['1', '0'],
  '1': ['0'],
}

console.log(allPaths(A))

const B = {
  '7': ['4'],
  '4': ['3', '2', '1'],
  '3': ['2', '1'],
  '2': ['1'],
  '1': ['0'],
}

console.log(allPaths(B))
```

[image-1]:	https://i.stack.imgur.com/A0hho.png