const load = require('./load.js')
const lines = load('18')
const m = lines.length
const n = lines[0].length
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

const isUppercase = c => (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90)
const isLowercase = c => (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
const isOrigin = c => c == '@'
const isWall = c =>  c == '#'
const isRoad = c =>  c == '.'

const board = () => {
  const res = []
  let origin = null
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const c = lines[i][j]
      if (isLowercase(c)) res.push(c)
      if (isOrigin(c)) origin = [i, j]
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
      if (isWall(k)) continue
      
      if (isLowercase(k) && keys.indexOf(k) < 0) {
        res.push([np, k, s])
      } else if (
        isRoad(k) || isOrigin(k) || 
        keys.indexOf(k.toLowerCase()) >= 0
      ) {
        queue.push([s+1, np])
      }
    }
  }
  return res
}

const part1 = () => {
  let min = Infinity
  const res = []
  
  const visit = (pos, keys, s) => {
    if (s >= min) return
    if (keys.length == KEYS.length) {
      console.log(s, keys.join(''))
      res.push([s, keys.join('')])
      if (s < min) min = s
    }
    
    const matches = bfs(pos, keys)
    for (let i = 0; i < matches.length; i++) {
      const [np, nk, ns] = matches[i]
      visit(np, [...keys, nk], 1 + s + ns)
    }
  }
  
  visit(ORIGIN, [], 0)
  return Math.min(...res.map(v => v[0]))
}

//console.log(lines)
const [KEYS, ORIGIN] = board()
console.log(part1())
//console.log(KEYS, ORIGIN)
//console.log(bfs(ORIGIN, []))
//console.log(bfs([1, 17], ['a']))
//console.log(bfs([1, 11], ['a', 'b']))
//console.log(bfs([1, 21], ['a', 'b', 'c']))
//console.log(bfs([3, 1], ['a', 'b', 'c', 'd']))
//console.log(bfs([1, 7], ['a', 'b', 'c', 'd', 'e']))

