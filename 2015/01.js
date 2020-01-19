const print = require('debug')('day1:')

const _m = { '(': 1, ')': -1 }
const floor = arr => arr.reduce((acc, a, i) => {
  const res = acc + _m[a]
  if (res === -1) { console.log(i) }
  return acc + _m[a]
}, 0)

const main = (input) => {
  print(floor(input)) 
}

export default main