require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("05", "\n")
const separator = strs.findIndex((v) => v === "")
const orders = strs
  .slice(0, separator)
  .map((v) => v.split("|").map(Number))
const updates = strs
  .slice(separator + 1)
  .map((v) => v.split(",").map(Number))
const rules = {}
orders.forEach(([a1, a2]) => {
  rules[a1] = rules[a1] || []
  rules[a1].push(a2)
})

function isValid(arr) {
  const cant = {}
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i]
    if (cant[v]) return false

    for (let k in rules) {
      if (rules[k].includes(v)) {
        cant[k] = true
      }
    }
  }
  return true
}

const middle = (arr) => arr[Math.floor(arr.length / 2)]

const part1 = () =>
  updates.filter(isValid).map(middle).sum()

run(part1)

function makeValid(raw) {
  let arr = [...raw]
  const cant = {}
  let i = 0
  while (i < arr.length) {
    // console.log(i, arr, cant)
    const v = arr[i]
    if (cant[v] !== undefined && cant[v] < i) {
      const j = cant[v]
      arr = [
        ...arr.slice(0, j),
        v,
        ...arr.slice(j, i),
        ...arr.slice(i + 1),
      ]

      for (let k in cant) {
        if (cant[k] === j) cant[k] = i
      }
      i = j
      continue
    }

    for (let k in rules) {
      if (rules[k].includes(v)) {
        if (cant[k] === undefined) {
          cant[k] = i
        } else {
          cant[k] = Math.min(cant[k], i)
        }
      }
    }

    i++
  }
  return arr
}

const part2 = () => {
  const incorrect = updates.filter((arr) => !isValid(arr))

  return incorrect.map(makeValid).map(middle).sum()
}

run(part2)
