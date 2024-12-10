require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("10", "\n")
const dirs = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
]
const m = strs.length,
  n = strs[0].length

const trailheads = (strs) => {
  const res = []
  for (let i = 0; i < m; i++) {
    const str = strs[i]
    for (let j = 0; j < n; j++) {
      if (str[j] === "0") res.push([i, j])
    }
  }
  return res
}

function calcScore(pos) {
  let score = 0
  const visited = {}

  function run(last, [x, y]) {
    visited[`${x},${y}`] = true

    if (last === 9) {
      score++
      return
    }

    dirs.forEach(([dx, dy]) => {
      const nx = x + dx
      const ny = y + dy
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) return
      if (strs[nx][ny] !== `${last + 1}`) return
      if (visited[`${nx},${ny}`]) return
      run(last + 1, [nx, ny])
    })
  }

  run(0, pos)
  return score
}

const part1 = (strs) => {
  const heads = trailheads(strs)
  return heads.map(calcScore).sum()
}

run(part1, strs)
