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

const avgSum = (p) =>
  (((p.pos + p.pos + p.count - 1) * p.count) / 2) * p.id

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

  return res.map(avgSum).sum()
}

run(part1, nums)

const part2 = (nums) => {
  const info = numsInfo(nums).map((p) => [p])

  for (let j = nums.length - 1; j > 0; j -= 2) {
    const q = info[j][0]
    let found = false
    for (let i = 0; i < j; i++) {
      if (found) break
      for (let k = 0; k < info[i].length; k++) {
        if (found) break
        const p = info[i][k]
        if (p.id < 0 && p.count >= q.count) {
          const newCount = p.count - q.count
          const newPos = p.pos + q.count
          p.id = q.id
          p.count = q.count
          if (newCount) {
            info[i].push({
              pos: newPos,
              id: -1,
              count: newCount,
            })
          }
          q.id = -1
          found = true
        }
      }
    }
  }

  let sum = 0
  for (let i = 0; i < info.length; i++) {
    for (let k = 0; k < info[i].length; k++) {
      const p = info[i][k]
      if (p.id > 0) {
        sum += avgSum(p)
      }
    }
  }
  return sum
}

run(part2, nums)
