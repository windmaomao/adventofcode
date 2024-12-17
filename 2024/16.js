require("./array")
require("./string")
const read = require("./read")
const run = require("./run")

const strs = read("16", "\n")

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

function findAllScores() {
  const arr = [[0, 0, origin, {}]]
  let current
  const res = []
  let step = 0

  while ((current = arr.pop()) && step < 20000000) {
    step++
    const [score, dindex, pos, visited] = current
    if (pos[0] == target[0] && pos[1] == target[1]) {
      res.push(score)
      continue
    }

    indexes.forEach((i) => {
      const dir = dirs[i]
      const np = pos.map((v, j) => v + dir[j])
      if (!visited[`${np}`] && map[np[0]][np[1]] != "#") {
        arr.push([
          score + (i != dindex ? 1001 : 1),
          i,
          np,
          { ...visited, [`${pos}`]: true },
        ])
      }
    })
  }

  return res
}

const part1 = () => findAllScores().min()

run(part1, strs)
