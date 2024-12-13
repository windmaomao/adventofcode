require("./array")
const read = require("./read")
const run = require("./run")

const map = read("12", "\n")
const m = map.length
const n = map[0].length

const dirs = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
]

function findAreas(map) {
  const visited = {}

  function connected(start, symbol) {
    const res = []

    function move([i, j]) {
      const k = `${i},${j}`

      res.push([i, j])
      visited[k] = true

      dirs.forEach(([di, dj]) => {
        const [ni, nj] = [i + di, j + dj]
        if (ni < 0 || ni == m || nj < 0 || nj == n) return
        const nk = `${ni},${nj}`
        if (map[ni][nj] != symbol) return
        if (visited[nk]) return
        move([ni, nj])
      })
    }

    move(start)
    return res
  }

  const items = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const k = `${i},${j}`
      if (!visited[k])
        items.push(connected([i, j], map[i][j]))
    }
  }

  return items
}

const area = (arr) => arr.length
const perimeter = (arr) => {
  const sides = {}
  let c = 0
  for (let [i, j] of arr) {
    ;[
      `r${i},${j}`,
      `r${i + 1},${j}`,
      `c${i},${j}`,
      `c${i},${j + 1}`,
    ].forEach((k) => {
      if (sides[k]) {
        c--
      } else {
        sides[k] = true
        c++
      }
    })
  }
  return c
}

const part1 = (map) => {
  const areas = findAreas(map)
  return areas
    .map((arr) => area(arr) * perimeter(arr))
    .sum()
}

run(part1, map)
