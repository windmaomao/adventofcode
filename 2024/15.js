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

  console.log(m)
  let score = 0,
    count = 0
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      if (m[i][j] == "O") {
        count++
        score += 100 * i + j
      }
    }
  }

  return [count, score]
}

run(part1, strs)

function transform() {
  let origin2,
    map2 = []
  for (let i = 0; i < map.length; i++) {
    let s = ""
    for (let j = 0; j < map[0].length; j++) {
      const c = map[i][j]
      if (c == "#") s += "##"
      if (c == "O") s += "[]"
      if (c == ".") s += ".."
      if (c == "@") {
        origin2 = [i, s.length]
        s += "@."
      }
    }
    map2.push(s)
  }

  return { map2, origin2 }
}

const { map2, origin2 } = transform()

function move2(m, o, d) {
  let arr = [o]
  let visited = []

  while (arr.length) {
    let [i, j] = arr.pop()
    i += d[0]
    j += d[1]

    if (m[i][j] == "#") return o
    if (m[i][j] == "]") {
      if (d[0] == 0) {
        if (d[1] == -1) arr.push([i, j - 1])
        else arr.push([i, j])
      } else {
        arr.push([i, j - 1])
        arr.push([i, j])
      }
      visited.push([i, j - 1])
    } else if (m[i][j] == "[") {
      if (d[0] == 0) {
        if (d[1] == -1) arr.push([i, j])
        else arr.push([i, j + 1])
      } else {
        arr.push([i, j])
        arr.push([i, j + 1])
      }
      visited.push([i, j])
    }
  }

  // console.log("visited", visited)
  visited.reverse().forEach(([i, j]) => {
    replace(m, [i, j], ".")
    replace(m, [i, j + 1], ".")
    const b = [i + d[0], j + d[1]]
    replace(m, b, "[")
    replace(m, [b[0], b[1] + 1], "]")
  })

  const o2 = [o[0] + d[0], o[1] + d[1]]
  replace(m, o2, "@")
  replace(m, o, ".")
  return o2
}

const part2 = () => {
  const m = [...map2]
  let p = origin2,
    k = 0,
    count = 1

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves[i].length; j++) {
      p = move2(m, p, dirs[moves[i][j]])
      k++
      if (k === count) {
        console.log(moves[i][j])
        return m
      }
    }
  }

  console.log(m)
  let score = 0,
    count2 = 0
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      if (m[i][j] == "[") {
        count2++
        score += 100 * i + j
      }
    }
  }

  return [count2, score]
}

run(part2)

// 1544460, too low
