const read = require('./read.js')
const arr = read('10').map(v => parseInt(v))

const compare = (a, b) => a - b

const part1 = nums => {
  let i = 0, c1 =0, c3 = 0, p = 0
  while (i < nums.length) {
    const diff = nums[i] - p
    if (diff == 1) c1++
    if (diff == 3) c3++
    p = nums[i]
    i++
  }
  return [c1, c3+1]
}

let tmp = arr.sort(compare)
console.log(part1(tmp))
