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

const part1 = strs => strs
  .map(extractIns)
  .flatMap(ins => ins
    .map(i => dirs[i])
    .scan(Math.plusN, [0,0])
    .slice(1)
  )
  .duplicate(p => `${p[0]}x${p[1]}`)
  .map(p => p[0].sum(Math.abs))
  .min()

export { extractIns, part1 }
