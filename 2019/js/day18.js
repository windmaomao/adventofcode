const load = require('./load.js')
const lines = load('18')
const m = lines.length
const n = lines[0].length
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

const board = () => {
  const res = []
  let origin = null
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const k = lines[i].charCodeAt(j)
      if (k >= 97 && k <= 122) res.push(lines[i][j])
      if (k == 64) origin = [i, j]
    }
  }
  return [res, origin]
}

const bfs = (pos, keys) => {
  const res = [], visited = {}, queue = [[0, pos]]
  while (queue.length) {
    [s, p] = queue.shift()
    for (let i = 0; i < dirs.length; i++) {
      const np = [p[0] + dirs[i][0], p[1] + dirs[i][1]]
      const key = `${np[0]}:${np[1]}`
      if (visited[key]) continue
      visited[key] = true
      const k = lines[np[0]][np[1]]
      if (k == '#') continue
      if (k == 'f') res.push([np, k, s])
      queue.push([s+1, np])
    }
  }
  return res
}

console.log(lines)
const [KEYS, ORIGIN] = board()
console.log(bfs(ORIGIN, []))