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

const part1 = () => {
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

  return updates
    .filter(isValid)
    .map((arr) => arr[Math.floor(arr.length / 2)])
    .sum()
}

run(part1)
