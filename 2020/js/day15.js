const read = require('./read.js')
const lines = read('15')[0].split(',').map(v => parseInt(v))

//0,3,6,0,3,3,1,0,4,0,

const part = (raw, max) => {
  const arr = raw.slice()
  const mem = {}
  
  let i = 0, n
  while ((p = arr.shift()) != undefined) {
    if (!mem[p]) mem[p] = []
    mem[p].unshift(i)
    n = p
    i++
  }
  
  while (i < max) { 
    const cache = mem[n]
    if (cache.length == 1) {
      n = 0
    } else {
      n = cache[0] - cache[1]
    }
    
    if (!mem[n]) mem[n] = []
    mem[n].unshift(i)
    if (mem[n].length > 2) {
      mem[n] = [mem[n][0], mem[n][1]]
    }
    
    i++
  }
  console.log(mem)
  return n
}

const part1 = () => part(lines, 2020)
const part2 = () => part(lines, 1000)

console.log(part1())
console.log(part2())