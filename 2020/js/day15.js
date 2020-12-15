const read = require('./read.js')
const lines = read('15')[0].split(',').map(v => parseInt(v))

const cache = () => {
  let i = 0, p, q
  const unshift = n => { i++; q = p; p = n; }
  const diff = () => (i < 2 ? 0 : p - q)
  return { unshift, diff }
}

const cacheV = max => {
  const a = new Array(max).fill(0)
    .map(v => new Array(3).fill(0))
    
  return index => {
    const s = index * 3
    const unshift = n => { a[s+2]++; a[s+1] = a[s]; a[s] = n }
    const diff = () => (a[s+2] < 2 ? 0 : a[s] - a[s+1])
    return { unshift, diff }
  }
}

const part = (arr, max) => {
  const mem = {}
  
  let i = 0, n
  while (i < arr.length) {
    n = arr[i]
    if (!mem[n]) mem[n] = cache()
    mem[n].unshift(i)
    i++
  }
  
  while (i < max) { 
    n = mem[n].diff()
    if (!mem[n]) mem[n] = cache()
    mem[n].unshift(i)
    i++
  }
//  console.log('m', Object.keys(mem).pop())
  return n
}

const part1 = () => part(lines, 2020)
const part2 = () => part(lines, 10000000)

console.log(part1())
//console.time('part2')
//console.log(part2())
//console.timeEnd('part2')

//0,3,6,0,3,3,1,0,4,0,
//const a = cache()
//a.unshift(0); console.log(a.diff())
//a.unshift(3); console.log(a.diff())
//a.unshift(7); console.log(a.diff())

//  10k -   19ms
// 100k -   93ms
//   1m -    6s
//  10m -   87s