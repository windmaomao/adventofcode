require("./array")
require("./string")
const read = require("./read")
const run = require("./run")

const strs = read("16.a", "\n")

function mapInfo(strs) {
  let origin, target
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    for (let j = 0; j < str.length; j++) {
      const c = str[j]
      if (c == "S") {
        origin = [i, j]
      }
      if (c == "E") {
        target = [i, j]
      }
    }
  }

  return { origin, target, map: [...strs] }
}

const { origin, target, map } = mapInfo(strs)

const dirs = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
]
const indexes = [0, 1, 2, 3]

function findMaxPoints() {
  const arr = [[0, 0, origin, {}]]
  let current
  const res = []
  let step = 0

  while ((current = arr.pop()) && step < 2000) {
    step++
    const [score, dir, pos, visited] = current
    if (pos[0] == target[0] && pos[1] == target[1]) {
      res.push([score, visited])
      console.log(score)
      continue
    }

    indexes.forEach((i) => {
      const dir = dirs[i]
      const np = pos.map((v, j) => v + dir[j])
      if (!visited[`${np}`] && map[np[0]][np[1]] != "#") {
        arr.push([
          score + 1,
          i,
          np,
          { ...visited, [`${pos}`]: true },
        ])
      }
    })
  }

  return null
}

const part1 = () => {
  return findMaxPoints()
}

run(part1, strs)
