import '../../utils/js/array'
import '../../utils/js/math'

const dirs = {
  'U': [ 0, 1], 'D': [0, -1],
  'L': [-1, 0], 'R': [1,  0]
}

const posKey = p => `${p[0]}x${p[1]}`
const dist = p => p.sum(Math.abs)

const duplicates = list => {
  const m = {}
  list.forEach(p => {
    const k = posKey(p)
    m[k] = m[k] || []
    m[k].push(p)
  })
  return Object
    .keys(m)
    .filter(k => m[k].length > 1)
}

// const part1 = dirs => dirs
//   .scan(Math.plusN, [0,0])
//   .then(findDuplicate)
//   .map(d => dist(d[0]))
//   .min()

export { dirs, part1, part2 }
