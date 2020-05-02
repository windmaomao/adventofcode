const md5 = require('md5')

const base = 'bgvyzdsv'
const md5Leading = (i, n) => md5(`${base}${i}`).slice(0, n)
function* genMd5() {
  let i = 0
  while(true) {
    if (md5Leading(i, 5) === '00000') yield i
    i++
  }
}

const iter = genMd5()
const part1 = data => iter.next().value
const part2 = data => {
  let i
  do {
    i = iter.next().value
    console.log(i)
  } while (md5Leading(i, 6) !== '000000') 
  return i
}

export default () => ({ part1, part2 })