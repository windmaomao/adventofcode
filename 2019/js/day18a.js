const lines = [
  "#########",
  "#b.A.@.a#",
  "#########"
]

const m = lines.length
const n = lines[0].length
const isUppercase = c => (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90)
const isLowercase = c => (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
const isOrigin = c => c == '@'
const isWall = c =>  c == '#'
const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const posKey = (i, j) => `${i},${j}`

const boardPos = () => {
  const res = {}
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const c = lines[i][j]
      if (isLowercase(c) || isOrigin(c)) res[c] = posKey(i, j)
    }
  }
  return res
}

const board = boardPos()

const search = require('./utils/search.js')
const pathFound = search.bfs(
  board['@'],
  key => {
    const p = key.split(',').map(v => parseInt(v))
    const ndirs = dirs
      .map(d => ([d[0] + p[0], d[1] + p[1]]))
      .filter(d => !isWall(lines[d[0]][d[1]]))
      .map(d => posKey(d[0], d[1]))
    console.log(p, ndirs)
    return ndirs
  },
  key => (Object.values(board).indexOf(key) >= 0)
)

console.log(board)
console.log(pathFound)