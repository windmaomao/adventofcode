const md5 = require('md5')

const base = 'bgvyzdsv'
const zeros = n => new Array(n).fill('0').join('')
const md5Match = n => {
  const z = zeros(n)
  return i => md5(`${base}${i}`).slice(0, n) === z
}
function* genMd5(n) {
  let i = 0, match = md5Match(n)
  while(true) {
    if (match(i)) {
      const rematch = yield i
      if (rematch) match = md5Match(rematch)
    }
    i++
  }
}

const iter = genMd5(5)
const part1 = data => iter.next().value
const part2 = data => iter.next(6).value

export default () => ({ part1, part2 })