require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("08", "\n")
const m = strs.length
const n = strs[0].length

function findAll(strs) {
  let res = {}
  for (let i = 0; i < m; i++) {
    const str = strs[i]
    for (let j = 0; j < n; j++) {
      const c = str[j]
      if (c !== ".") {
        res[c] = res[c] || []
        res[c].push([i, j])
      }
    }
  }
  return res
}

const objs = findAll(strs)

function antinodes(p1, p2) {
  const diff = p1.map((v, i) => v - p2[i])
  const v1 = diff.map((v, i) => v + p1[i])
  const v2 = diff.map((v, i) => p2[i] - v)
  return [v1, v2]
}

// console.log(antinodes([3, 4], [5, 5]))
// console.log(antinodes([3, 4], [4, 8]))
// console.log(antinodes([5, 5], [4, 8]))

const part1 = (objs) => {
  const res = {}

  for (let k in objs) {
    const loc = objs[k]
    if (loc.length <= 1) continue

    for (let i = 0; i < loc.length; i++) {
      for (let j = i + 1; j < loc.length; j++) {
        const ans = antinodes(loc[i], loc[j])
        ans.forEach((p) => {
          if (p[0] < 0 || p[0] >= m) return
          if (p[1] < 0 || p[1] >= n) return
          res[`${p}`] = true
        })
      }
    }
  }

  return Object.keys(res).length
}

run(part1, objs)

function antinodes2(p1, p2) {
  const res = []
  const diff = p1.map((v, i) => v - p2[i])

  let finish = false
  let p = [...p1]
  while (!finish) {
    p = diff.map((v, i) => p[i] + v)
    if (p[0] < 0 || p[0] >= m || p[1] < 0 || p[1] >= n) {
      finish = true
    } else {
      res.push(p)
    }
  }

  finish = false
  p = [...p2]
  while (!finish) {
    p = diff.map((v, i) => p[i] - v)
    if (p[0] < 0 || p[0] >= m || p[1] < 0 || p[1] >= n) {
      finish = true
    } else {
      res.push(p)
    }
  }

  return res
}

// console.log(antinodes2([0, 0], [1, 3]))
// console.log(antinodes2([0, 0], [2, 1]))
// console.log(antinodes2([1, 3], [2, 1]))

const part2 = (objs) => {
  const res = {}

  for (let k in objs) {
    const loc = objs[k]
    if (loc.length <= 1) continue

    for (let i = 0; i < loc.length; i++) {
      for (let j = i + 1; j < loc.length; j++) {
        const ans = antinodes2(loc[i], loc[j])
        res[`${loc[i]}`] = true
        res[`${loc[j]}`] = true
        ans.forEach((p) => {
          res[`${p}`] = true
        })
      }
    }
  }

  return Object.keys(res).length
}

run(part2, objs)
