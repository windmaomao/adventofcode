require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("06.a", "\n")

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

const part2 = (strs) => {
  let pos = [...origin]
  let d = 0,
    x,
    y
  const visited = {},
    turned = {},
    obstructs = {}
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
      turned[`${pos}`] = true
      d++
      if (d === 4) d = 0
      continue
    }

    nd = d + 1
    if (nd === 4) nd = 0
    let done = false,
      first = true
    let nx = pos[0],
      ny = pos[1]
    while (!done) {
      nx += dirs[nd][0]
      ny += dirs[nd][1]
      if (
        !strs[nx] ||
        !strs[nx][ny] ||
        visited[`${[nx, ny]}`] == (nd + 2) % 4
      ) {
        done = true
        continue
      }
      if (turned[`${[nx, ny]}`] && !visited[`${[x, y]}`]) {
        obstructs[`${x},${y}`] = true
      }
      first = false
    }

    pos = [x, y]
    visited[`${pos}`] = d
  }

  return obstructs
}

run(part2, strs)
