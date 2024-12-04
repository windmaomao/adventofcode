require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("04", "\n")

const getRowCols = (strs) => {
  const res = []

  const push = (str) => {
    res.push(str)
    res.push(str.split("").reverse().join(""))
  }

  const positive = {},
    negative = {},
    column = {}
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    for (let j = 0; j < str.length; j++) {
      const char = str[j]
      column[j] = column[j] || ""
      column[j] += char
      let p = i + j
      positive[p] = positive[p] || ""
      positive[p] += char
      let n = i - j
      negative[n] = negative[n] || ""
      negative[n] += char
    }
  }

  strs.forEach(push)
  Object.values(column).forEach(push)
  Object.values(positive).forEach(push)
  Object.values(negative).forEach(push)

  return res
}

const countXmas = (str) =>
  [...(str.match(/XMAS/g) || [])].length

const part1 = (strs) =>
  getRowCols(strs).map(countXmas).sum()

run(part1, strs)

const part2 = (strs) => {
  let count = 0
  for (let i = 1; i < strs.length - 1; i++) {
    const str = strs[i]
    for (let j = 1; j < str.length - 1; j++) {
      if (str[j] !== "A") continue
      if (
        strs[i - 1][j - 1] !== "M" &&
        strs[i - 1][j - 1] !== "S"
      )
        continue
      if (
        strs[i - 1][j - 1] === "M" &&
        strs[i + 1][j + 1] !== "S"
      )
        continue

      if (
        strs[i - 1][j - 1] === "S" &&
        strs[i + 1][j + 1] !== "M"
      )
        continue

      if (
        strs[i - 1][j + 1] !== "M" &&
        strs[i - 1][j + 1] !== "S"
      )
        continue
      if (
        strs[i - 1][j + 1] === "M" &&
        strs[i + 1][j - 1] !== "S"
      )
        continue
      if (
        strs[i - 1][j + 1] === "S" &&
        strs[i + 1][j - 1] !== "M"
      )
        continue

      count++
    }
  }
  return count
}

run(part2, strs)
