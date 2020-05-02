const md5 = require('md5')

const base = 'bgvyzdsv'
const md5Match = n => {
  const z = new Array(n).fill('0').join('')
  return i => md5(`${base}${i}`).slice(0, n) === z
}
function* genMd5() {
  let i = 0, match
  while(true) {
    if (i ===0 || match(i)) {
      const rematch = yield i
      if (rematch) match = md5Match(rematch)
    }
    i++
  }
}

const iter = genMd5()
iter.next()
const part1 = data => iter.next(5).value
const part2 = data => iter.next(6).value

export default () => ({ part1, part2 })