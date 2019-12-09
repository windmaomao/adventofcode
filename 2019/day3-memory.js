const filereader = require('./utils/filereader.js')
const lines = filereader.readFile('/day3.data')

// const _sparse = () => {
//   const arr = {}
//   const _pos = (i, j) => 'i'+i+'j'+j
//   const append = (i, j, v) => {
//     arr[_pos(i, j)] = v
//   }
//   const exist = (i, j) => {
//     return true
//   }

//   return { arr, append, exist }
// }

const memories = lines.map(line => {
  const parts = line.split(',')
  const o = { x: 0, y: 0 }

  return parts.reduce((acc, ins) => {
    const char = ins[0]
    const num = parseInt(ins.substring(1))
    switch (char) {
      case 'R': o.x += num; break
      case 'L': o.x -= num; break
      case 'U': o.y += num; break
      case 'D': o.y -= num; break
    }
    acc.push({...o})
    return acc
  }, [])

})

console.log(memories[0])