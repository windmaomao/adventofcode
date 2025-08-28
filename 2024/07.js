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

function findSum2(sum, nums) {
  const n = nums.length
  function isGoal(start, i, op) {
    if (start > sum) return false
    if (i === n) {
      if (start === sum) return true
      return false
    }

    let next = start
    if (op == 0) next += nums[i]
    if (op == 1) next *= nums[i]
    if (op == 2) next = Number(`${next}${nums[i]}`)

    return (
      isGoal(next, i + 1, 0) ||
      isGoal(next, i + 1, 1) ||
      isGoal(next, i + 1, 2)
    )
  }

  return isGoal(0, 0, 0)
}

const part2 = (rows) =>
  rows
    .filter(({ sum, nums }) => findSum2(sum, nums))
    .map((r) => r.sum)
    .sum()

run(part2, rows)
