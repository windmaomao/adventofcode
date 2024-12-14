require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("13", "\n")

function getEquations(strs) {
  const chunks = strs.chunk(4)
  return chunks.map((lines) =>
    lines
      .map((line) => line.match(/\d+/g))
      .filter((v) => v)
      .map((arr) => arr.map(Number))
  )
}

function solveEquation(c) {
  const base = c[1][0] * c[0][1] - c[1][1] * c[0][0]
  if (base == 0) return null

  const y = (c[2][0] * c[0][1] - c[2][1] * c[0][0]) / base
  const x = (c[2][0] - c[1][0] * y) / c[0][0]
  return [x, y]
}

const part1 = (strs) =>
  getEquations(strs)
    .map(solveEquation)
    .filter((ans) => ans.every(Number.isInteger))
    .filter((ans) => ans.every((v) => v <= 100))
    .map(([a, b]) => a * 3 + b)
    .sum()

run(part1, strs)
