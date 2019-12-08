const filereader = require('./utils/filereader')
const [data] = filereader.readFile('/day8.data')
const chunk = require('./utils/chunk')
const count = require('./utils/count')
const indexOf = require('./utils/indexOf')
const transform = require('./utils/transform')

const width = 25, 
      height = 6, 
      size = width * height

const pics = chunk(data.split(''), size)

const s0 = pics.map(arr => count(arr, '0'))
const lowId = indexOf(s0)
const s1 = pics.map(arr => count(arr, '1'))
const s2 = pics.map(arr => count(arr, '2'))

console.log('Day 9/1:', s1[lowId] * s2[lowId])

const pixes = Array(size).fill(0)
const pixProcessed = pixes.map((_, pixId) => {
  return transform(pics, (acc, pic) => {
    if (pic[pixId] === '2') return false
    return pic[pixId]
  }, '0')
})
const pixRows = chunk(pixProcessed, width).map(arr => arr.join(''))

console.log(pixRows)

// const size = 25*6
// const chunkTotal = str.length / size

// const digitTotal = (sub, search) => sub.split('').reduce((acc2, char) => {
//   if (char === search) acc2++
//   return acc2
// }, 0)

// const stats = Array(chunkTotal).fill(0).reduce((acc, _) => {
//   const sub  = acc.str.substring(0, size)
//   acc.chunks.push(sub)
//   acc.str = acc.str.substring(size)
//   acc.t0.push(digitTotal(sub, '0'))
//   acc.t1.push(digitTotal(sub, '1'))
//   acc.t2.push(digitTotal(sub, '2'))
//   return acc
// }, { str, chunks: [], t0: [], t1: [], t2: [] })

// console.log(stats)

// const image = Array(size).fill(0).map((_, pixelId) => {
//   const found = Array(chunkTotal).fill(0).reduce((acc, _2, chunkId) => {
//     if (acc.found) return acc
//     const p = stats.chunks[chunkId][pixelId]
//     if (p !== '2') { acc.char = p; acc.found = true }
//     return acc
//   }, { char: '', found: false })
//   return found.char
// })

// console.log(image.join(''))

// 11110 10010 00110 10010 10000
// 10000 10010 00010 10010 10000
// 11100 11110 00010 10010 10000
// 10000 10010 00010 10010 10000
// 10000 10010 10010 10010 10000
// 10000 10010 01100 01100 11110