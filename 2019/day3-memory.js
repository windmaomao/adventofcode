const filereader = require('./utils/filereader')
const data = filereader.readFile('day3.data')
const genPoints = require('./day3_genPoints')
const indexOf = require('./utils/indexOf')

const lines = data.map(genPoints)

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