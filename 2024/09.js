require("./array")
const read = require("./read")
const run = require("./run")

const strs = read("09", "\n")
const str = strs[0] // "12345"
const nums = str.split("").map(Number)

function numsInfo(nums) {
  const info = []
  let k = 0,
    occupied = true,
    id = -1
  for (let i = 0; i < nums.length; i++) {
    if (occupied) id++
    info.push({
      pos: k,
      id: occupied ? id : -1,
      count: nums[i],
    })
    k += nums[i]
    occupied = !occupied
  }

  return info
}

const part1 = (nums) => {
  const info = numsInfo(nums)

  const res = []
  let i = 0,
    j = nums.length - 1
  while (i < nums.length && i <= j) {
    const p = info[i]
    if (p.id >= 0) {
      res.push({ ...p })
      i++
    } else {
      const q = info[j]
      if (!q.count) {
        j -= 2
        continue
      }
      if (q.count >= p.count) {
        p.id = q.id
        q.count = q.count - p.count
        res.push({ ...p })
        i++
      } else {
        p.id = q.id
        const newCount = p.count - q.count
        const newPos = p.pos + q.count
        p.count = q.count
        q.count = 0
        res.push({ ...p })
        p.pos = newPos
        p.count = newCount
        p.id = -1
        j -= 2
      }
    }
  }

  return res
    .map(
      (p) =>
        (((p.pos + p.pos + p.count - 1) * p.count) / 2) *
        p.id
    )
    .sum()
}

run(part1, nums)

//
// 12345
// 0..111....22222
// 0 * 0
//  1 * 2
//   2 * 2
//    3 * 1
//     4 * 1
//      5 * 1
//       6 * 2
//        7 * 2
//         8 * 2
// 0..............
