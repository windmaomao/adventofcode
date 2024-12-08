require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("07", "\n")
const rows = strs.map((str) => {
  const parts = str.split(":")
  const sum = Number(parts[0])
  const nums = parts[1].slice(1).split(" ").map(Number)

  return { sum, nums }
})

function findSum(sum, nums) {
  const n = nums.length
  function isGoal(start, i, op) {
    if (start > sum) return false
    if (i === n) {
      if (start === sum) return true
      return false
    }

    const next = op ? start * nums[i] : start + nums[i]
    return (
      isGoal(next, i + 1, false) ||
      isGoal(next, i + 1, true)
    )
  }

  return isGoal(0, 0, 0)
}

const part1 = (rows) =>
  rows
    .filter(({ sum, nums }) => findSum(sum, nums))
    .map((r) => r.sum)
    .sum()

run(part1, rows)
