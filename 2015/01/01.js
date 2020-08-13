const data = require('../js/input')('01/01.data')

const floor = s => s === '(' ? 1 : -1

const sum2Basement = (acc, s, i) => {
  const prev = i > 0 ? acc[i - 1] : 0
  if (prev === -1) return false
  return acc.push(prev + floor(s))
}

const prepare = data[0].split('')
const part1 = prepare.reduce((acc, item) => acc + floor(item), 0)

console.log(part1)
