const filereader = require('./utils/filereader.js')
const orbits = filereader.readFile('day6.data')

const planets = {}
orbits.forEach((orbit) => {
  const p = orbit.split(')')
  const child = p[1], parent = p[0]
  planets[child] = parent;
})

function findPath(p) {
  if (planets[p]) {
    return findPath(planets[p], planets).concat([p]);
  }
  return []
}

let totalPath = 0;
for (let p in planets) {
  totalPath += findPath(p).length;
}

console.log('Day 6-1:', totalPath)

const yp = findPath('YOU')
const sp = findPath('SAN')

let i = 0
while (
  i < yp.length && i < sp.length &&
  yp[i] === sp[i]
) { i++ }

const _l = p => p.length - i - 1

console.log('Day 6-2:', _l(yp) + _l(sp))