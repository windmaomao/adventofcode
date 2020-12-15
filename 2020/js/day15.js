const read = require('./read.js')
const lines = read('15')[0].split(',').map(v => parseInt(v))

const cacheV = max => {
  const a = new Int32Array(max*2).fill(-1)

  return index => {
    const s = index * 2
    const unshift = n => { a[s+1] = a[s]; a[s] = n }
    const diff = () => (a[s+1] >= 0 ? a[s] - a[s+1] : 0)
    return { unshift, diff }
  }
}

const part = (arr, max) => {
  const caches = cacheV(max)
  
  let i = 0, n
  while (i < arr.length) {
    n = arr[i]
    caches(n).unshift(i)
    i++
  }
  
  while (i < max) { 
    n = caches(n).diff()
    caches(n).unshift(i)
    i++
  }
  
  return n
}

const part1 = () => part(lines, 2020)
const part2 = () => part(lines, 30000000)

console.log(part1())
console.time('part2')
console.log(part2())
console.timeEnd('part2')

//0,3,6,0,3,3,1,0,4,0,

//  10k -   19ms
// 100k -   93ms
//   1m -    6s
//  10m -   87s  -> 2s
//  30m -        -> 6s