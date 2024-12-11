require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("11", "\n")
const nums = strs[0].split(" ").map(Number)

function blinks(nums, total) {
  function getTotal(i, count) {
    if (count == 0) return 1

    if (i == 0) return getTotal(1, count - 1)
    let digits = `${i}`
    let dn = digits.length
    if (dn % 2 == 0) {
      let half = dn / 2
      const left = Number(digits.slice(0, half))
      const right = Number(digits.slice(half))
      return (
        getTotal(left, count - 1) +
        getTotal(right, count - 1)
      )
    } else {
      return getTotal(i * 2024, count - 1)
    }
  }

  return nums.map((i) => getTotal(i, total)).sum()
}

const part1 = (nums) => blinks(nums, 25)

run(part1, nums)

const part2 = (nums) => blinks(nums, 75)

run(part2, nums)
