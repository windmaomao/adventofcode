const read = require('./read.js')
const fn = read('02')

const line = s => {
  const parts = s.split(' ')
  return {
    r: parts[0].split('-').map(Number),
    ch: parts[1][0],
    pw: parts[2]
  }
}

const count = (str, c) => str
  .split('')
  .filter(d => d === c)
  .length

const part1 = fn.map(line).map(l => {
  const { r, ch, pw } = l
  const c = count(pw, ch)
  return c >= r[0] && c <= r[1]
}).filter(d => !!d).length

const part2 = fn.map(line).map(l => {
  const { r, ch, pw } = l
  const p1 = pw[r[0]-1] === ch
  const p2 = pw[r[1]-1] === ch
  return (p1 && !p2) || (!p1 && p2)
}).filter(d => !!d).length

console.log(part1, part2)