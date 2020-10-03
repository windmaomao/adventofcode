import './sequence'
const md5 = require('md5')

const md5Match = (base, n) => {
  const z = new Array(n).fill('0').join('')
  return i => md5(`${base}${i}`).slice(0, n) === z
}

const secret = 'bgvyzdsv'
const match5 = md5Match(secret, 5)
const part1 = () => []
  .generate(match5)
  .indexOf(true)

export { md5Match, part1 }

// function* genMd5(base) {
//   const matchBase = md5Match(base)
//   let i = 0, match
//   while(true) {
//     if (i ===0 || match(i)) {
//       const n = yield i
//       if (n) match = matchBase(n)
//     }
//     i++
//   }
// }
//
// const prepare = data => {
//   const iter = genMd5(data[0])
//   iter.next()
//   return iter
// }
// const part1 = iter => iter.next(5)
// const part2 = iter => iter.next(6)
// const finish = data => data.value
//
// export default () => ({ prepare, part1, part2, finish })