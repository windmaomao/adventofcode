const read = require('./read.js')
const lines = read('15')[0].split(',').map(v => parseInt(v))

const cache = max => {
  const a = new Int32Array(max).fill(-1)

  return (n, i) => {
    res = a[n] < 0 ? 0 : (i - a[n])
    a[n] = i
    return res
  }
}

const part = (arr, max) => {
  const speak = cache(max)
  
  let i = 0
  while (i < arr.length - 1) {
    speak(arr[i], i)
    i++
  }
  
  let n = arr[arr.length - 1]
  i = arr.length
  
  while (i < max) { 
    n = speak(n, i - 1)
    i++
  }
  
  return n
}

const part1 = () => part(lines, 2020)
const part2 = () => part(lines, 30000000)

const run = require('./run.js')
run(part1)
//run(part2)


//0,3,6,0,3,3,1,0,4,0,

//  10k -   19ms
// 100k -   93ms
//   1m -    6s
//  10m -   87s  -> 2s
//  30m -        -> 6s