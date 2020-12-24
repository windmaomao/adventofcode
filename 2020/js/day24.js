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

const _k = p => p.join(',')

const getGrid = () => {
  const m = {}

  lines.map(line => {
    return getDirs(line).reduce((acc, dir) => {
      const rel = dirs[dir]
      return acc.map((v, i) => v + rel[i])
    }, [0, 0])
  }).forEach(p => {
    const k = _k(p)
    if (m[k] == undefined) m[k] = false
    m[k] = !m[k]
  })

  return m
}

const gameOfLife = m => {
  let i = 0
  const rels = Object.values(dirs)
  let g = {...m}, g2
  while (i < 2) {
    const neighbours = {}

    const blacks = Object.keys(g).filter(k => g[k])
    console.log(i, blacks.length)
    blacks.forEach(b => {
      const p = b.split(',').map(v => parseInt(v))
      rels.forEach(rel => {
        const np = rel.map((r, j) => r + p[j])
        neighbours[_k(np)] = true
      })
    })

    g2 = {}
    blacks.forEach(b => { g2[b] = true })
    Object.keys(neighbours).forEach(b => {
      const p = b.split(',').map(v => parseInt(v))
      const bn = rels.map(rel => {
        const np = rel.map((r, j) => r + p[j])
        return g[_k(np)]
      }).filter(v => v).length
      
      if (g[b]) {
        if (bn == 0 || bn > 2) g2[b] = false
      } else {
        if (bn == 2) g2[b] = true
      }
    })

    i++
    g = g2
  }
}

const part1 = m => Object.values(m).filter(v => v).length

const read = require('./read.js')
const lines = read('24a')
const run = require('./run')
const grid = getGrid()
run(part1, grid)
run(gameOfLife, grid)

// (0,0) (0,1) (0,2) (0,3) (0,4)
//    (1,0) (1,1) (1,2) (1,3) (1,4)
//       (2,0) (2,1) (2,2) (2,3) (2,4)
//          (3,0) (3,1) (3,2) (3,3) (3,4)