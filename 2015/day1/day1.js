const filereader = require('../utils/filereader.js')
const raw = filereader.readFile('day1/input', '')

const _m = { '(': 1, ')': -1}
const floor = arr => arr.reduce((acc, a, i) => {
  const res = acc + _m[a]
  if (res === -1) { console.log(i) }
  return acc + _m[a]
}, 0)

console.log(floor(raw))
