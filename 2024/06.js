require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("06", "\n")

function findOrigin(strs) {
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "^") return [i, j]
    }
  }
}

const origin = findOrigin(strs)

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]

const part1 = (strs) => {
  let pos = [...origin]
  let d = 0,
    x,
    y
  const visited = {}
  let finished = false

  while (!finished) {
    const dir = dirs[d]
    x = pos[0] + dir[0]
    y = pos[1] + dir[1]

    if (!strs[x] || !strs[x][y]) {
      finished = true
      continue
    }

    if (strs[x][y] === "#") {
      d++
      if (d === 4) d = 0
      continue
    }

    visited[`${x},${y}`] = true
    pos = [x, y]
  }

  return Object.keys(visited).length
}

run(part1, strs)
