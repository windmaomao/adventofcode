const read = require('./read.js')
const fn = read('03')

const n = fn[0].length

const traverse = (slop, odd = false) => {
  const res = fn.reduce((acc, s, index) => {
    if (odd && (index % 2 == 1)) return acc
    acc.c += s[acc.i] === '#' ? 1 : 0
    acc.i = (acc.i + slop) % n
    return acc
  }, { i: 0, c: 0 })
  return res.c
}

const part1 = () => traverse(3)
const part2 = () => {
  return [
    traverse(1), traverse(3),
    traverse(5), traverse(7),
    traverse(1, true)
  ]
}

console.log(part1(), part2())
console.log(104*230*83*98*49)