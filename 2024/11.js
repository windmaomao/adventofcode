require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("11", "\n")
const nums = strs[0].split(" ").map(Number)

function blinks(nums, total) {
  const visited = {}

  function getTotal(i, count) {
    if (count == 0) return 1

    const k = `${i},${count}`
    if (visited[k]) return visited[k]

    let res
    if (i == 0) {
      res = getTotal(1, count - 1)
    } else {
      let digits = `${i}`
      let dn = digits.length
      if (dn % 2 == 0) {
        let half = dn / 2
        const left = Number(digits.slice(0, half))
        const right = Number(digits.slice(half))
        res =
          getTotal(left, count - 1) +
          getTotal(right, count - 1)
      } else {
        res = getTotal(i * 2024, count - 1)
      }
    }

    visited[k] = res
    return res
  }

  return nums.map((i) => getTotal(i, total)).sum()
}

const part1 = (nums) => blinks(nums, 25)

run(part1, nums)

const part2 = (nums) => blinks(nums, 75)

run(part2, nums)
