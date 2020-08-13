const data = require('../js/input')('01/01.data')
require('../js/array')

const floor = s => s === '(' ? 1 : -1

const sum2Basement = (acc, s, i) => {
  const prev = i > 0 ? acc[i - 1] : 0
  if (prev === -1) return false
  return acc.push(prev + floor(s))
}

const prepare = data[0].split('')
const part1 = prepare.sum(floor)
const part2 = prepare.transform(sum2Basement, []).length

console.log(part1)
console.log(part2)
