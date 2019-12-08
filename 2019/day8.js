const filereader = require('./utils/filereader.js')
const [str] = filereader.readFile('/day8.data')

// console.log(str)

const size = 25*6
const chunkTotal = str.length / size

const digitTotal = (sub, search) => sub.split('').reduce((acc2, char) => {
  if (char === search) acc2++
  return acc2
}, 0)

const stats = Array(chunkTotal).fill(0).reduce((acc, _) => {
  const sub  = acc.str.substring(0, size)
  acc.chunks.push(sub)
  acc.str = acc.str.substring(size)
  acc.t0.push(digitTotal(sub, '0'))
  acc.t1.push(digitTotal(sub, '1'))
  acc.t2.push(digitTotal(sub, '2'))
  return acc
}, { str, chunks: [], t0: [], t1: [], t2: [] })

console.log(stats)

const image = Array(size).fill(0).map((_, pixelId) => {
  const found = Array(chunkTotal).fill(0).reduce((acc, _2, chunkId) => {
    if (acc.found) return acc
    const p = stats.chunks[chunkId][pixelId]
    if (p !== '2') { acc.char = p; acc.found = true }
    return acc
  }, { char: '', found: false })
  return found.char
})

console.log(image.join(''))

// 11110 10010 00110 10010 10000
// 10000 10010 00010 10010 10000
// 11100 11110 00010 10010 10000
// 10000 10010 00010 10010 10000
// 10000 10010 10010 10010 10000
// 10000 10010 01100 01100 11110