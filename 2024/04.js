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
