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
const keys = Object.values(board)
const keysMap = keys.map(thisKey => {
  const othersFound = search.bfs(
    thisKey,
    key => {
      const p = key.split(',').map(v => parseInt(v))
      return dirs
        .map(d => ([d[0] + p[0], d[1] + p[1]]))
        .filter(d => !isWall(lines[d[0]][d[1]]))
        .map(d => posKey(d[0], d[1]))
    },
    key => (keys.indexOf(key) >= 0)
  )
  return othersFound
})


console.log(board)
console.log(keysMap)