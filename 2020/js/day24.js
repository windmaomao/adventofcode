const dirs = {
  e: [-1, 1], se: [0,  1], sw: [ 1, 0],
  w: [1, -1], nw: [0, -1], ne: [-1, 0]
}

const getDirs = lines => {
  let str = lines.split('')
  const res = []
  while (str.length) {
    if (str[0] == 'e' || str[0] == 'w') {
      res.push(str[0])
      str = str.slice(1)
    } else {
      res.push(str[0] + str[1])
      str = str.slice(2)
    }
  }
  return res
}

const part1 = () => {
  const m = {}
  const _k = p => p.join(',')

  lines.map(line => {
    return getDirs(line).reduce((acc, dir) => {
      const rel = dirs[dir]
      return acc.map((v, i) => v + rel[i])
    }, [0, 0])
  }).forEach(p => {
    console.log(p)
    const k = _k(p)
    if (m[k] == undefined) m[k] = false
    m[k] = !m[k]
  })

  return Object.values(m).filter(v => v).length
} 

const read = require('./read.js')
const lines = read('24')
const run = require('./run')
run(part1)      


// (0,0) (0,1) (0,2) (0,3) (0,4)
//    (1,0) (1,1) (1,2) (1,3) (1,4)
//       (2,0) (2,1) (2,2) (2,3) (2,4)
//          (3,0) (3,1) (3,2) (3,3) (3,4)