import './sequence'
const md5 = require('md5')

const md5Match = (base, n) => {
  const z = new Array(n).fill('0').join('')
  return i => md5(`${base}${i}`).slice(0, n) === z
}

const part1 = secret => []
  .generateSequence(md5Match(secret, 5))
  .indexOf(true)

const part2 = secret => []
  .generateSequence(md5Match(secret, 6))
  .indexOf(true)

export { md5Match, part1, part2 }
