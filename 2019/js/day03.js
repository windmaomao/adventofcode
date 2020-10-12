import '../../utils/js/array'
import '../../utils/js/math'

const extractIns = str => str
  .split(',')
  .flatMap(s => {
    const n = parseInt(s.slice(1))
    return Array.new(n, s[0])
  })

const dirs = {
  'U': [ 0, 1], 'D': [0, -1],
  'L': [-1, 0], 'R': [1,  0]
}

const posKey = p => `${p[0]}x${p[1]}`
const part1 = strs => strs
  .map(extractIns)
  .flatMap(ins => ins
    .map(i => dirs[i])
    .scan(Math.plusN, [0,0])
    .slice(1)
    .uniqBy(posKey)
  )
  .duplicate(posKey)
  .map(p => p[0].sum(Math.abs))
  .min()

const objKey = o => `${o.p[0]}x${o.p[1]}`
const part2 = strs => strs
  .map(extractIns)
  .flatMap(ins => ins
    .map(i => dirs[i])
    .scan(Math.plusN, [0,0])
    .map((p, i) => ({ p, i }))
    .slice(1)
    .uniqBy(objKey)
  )
  .duplicate(objKey)
  .map(ol => ol.sum(o => o.i))
  .min()

export { extractIns, part1, part2 }
