require("./array")
require("./string")
const read = require("./read")
const run = require("./run")

const strs = read("15", "\n")

function parse(strs) {
  let i = 0,
    origin
  const map = []
  while (i < strs.length) {
    if (strs[i]) {
      map.push(strs[i])
      const j = strs[i].indexOf("@")
      if (j >= 0) {
        origin = [i, j]
      }
    } else {
      break
    }
    i++
  }

  i++
  const moves = []
  while (i < strs.length) {
    moves.push(strs[i])
    i++
  }

  return { map, moves, origin }
}

const { map, moves, origin } = parse(strs)

const dirs = {
  "<": [0, -1],
  v: [1, 0],
  ">": [0, 1],
  "^": [-1, 0],
}

function replace(m, b, c) {
  const arr = m[b[0]].split("")
  arr[b[1]] = c
  m[b[0]] = arr.join("")
}

function move(m, o, d) {
  let [i, j] = o
  while (true) {
    i += d[0]
    j += d[1]
    if (m[i][j] == "#") return o
    if (m[i][j] == ".") {
      let b = [i, j]
      while (b[0] !== o[0] || b[1] !== o[1]) {
        const nb = [b[0] - d[0], b[1] - d[1]]
        replace(m, b, m[nb[0]][nb[1]])
        b = nb
      }
      replace(m, o, ".")
      return [o[0] + d[0], o[1] + d[1]]
    }
  }
}

const part1 = () => {
  const m = [...map]
  let p = origin

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves[i].length; j++) {
      p = move(m, p, dirs[moves[i][j]])
    }
  }

  let score = 0
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      if (m[i][j] == "O") {
        score += 100 * i + j
      }
    }
  }

  return score
}

run(part1, strs)
