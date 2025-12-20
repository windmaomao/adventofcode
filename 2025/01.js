require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("01", "\n")
const list = strs.map((s) => {
  const d = s[0] == "R" ? 1 : -1
  const n = Number(s.slice(1))
  return [d, n]
})

const part1 = (list) => {
  let i = 0
  list.reduce((acc, [d, n]) => {
    let next = acc + d * (n % 100)
    if (next < 0) next += 100
    if (next > 99) next -= 100
    if (next === 0) i++
    console.log(next)
    return next
  }, 50)
  return i
}

run(part1, list)
