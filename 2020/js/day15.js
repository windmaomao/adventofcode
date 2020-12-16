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
    speak(arr[i], i); i++
  }
  
  let n = arr[i]
  while (i < max - 1) { 
    n = speak(n, i)
    i++
  }
  
  return n
}

const run = require('./run.js')
run(part, lines, 2020)
run(part, lines, 30000000)