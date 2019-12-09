const filereader = require('./utils/filereader')
const data = filereader.readFile('/day3.data')
const indexOf = require('./utils/indexOf')

const _dist = p => Math.abs(p.x) + Math.abs(p.y)

const lines = data.map(line => {
  let step = 0
  const o = { x: 0, y: 0 }
  const parts = line.split(',')

  return parts.reduce((acc, ins) => {
    const char = ins[0]
    const num = parseInt(ins.substring(1))
    const next = (dx, dy) => {
      step++; o.x += dx; o.y += dy; 
      acc.push({...o, dist: _dist(o), step})
    }
    for (let i = 1; i <= num; i++) {
      switch (char) {
        case 'R': next(1, 0); break
        case 'L': next(-1, 0); break
        case 'U': next(0, 1); break
        case 'D': next(0, -1); break
      }
    }
    return acc
  }, [])
})


const lineMaps = lines.map(line => {
  const m = new Map()
  line.forEach((p, i) => {
    const key = p.x + ',' + p.y
    if (!m.has(key)) m.set(key, i)
  })
  return m
})

let intersects = [], dists = [], steps = []
for (var [key, i] of lineMaps[0].entries()) {
  const j = lineMaps[1].get(key)
  if (j) {
    const p1 = lines[0][i], p2 = lines[1][j]
    if (p1.x != 0 || p2.y != 0) {
      intersects.push(p1)
      dists.push(p1.dist)
      steps.push(p1.step + p2.step)
    }
  }
}

console.log('Day 3/1:', dists[indexOf(dists)])
console.log('Day 3/2:', steps[indexOf(steps)])