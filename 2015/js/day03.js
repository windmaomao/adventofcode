import './array'

const dirs = {
  '^': [0, 1], 'v': [0, -1],
  '<': [-1, 0], '>': [1, 0]
}

const batch = dirs => dirs.scan((a, d) => (
  [a[0] + d[0], a[1] + d[1]]
), [0, 0])
const posKey = p => `${p[0]}x${p[1]}`

const uniqSize = dirs => dirs.uniqBy(posKey).length

const part1 = dirs => dirs
  .apply(batch)
  .apply(uniqSize)

const modFilter = v => (_, i) => i % 2 === v
const part2 = dirs => [0, 1]
  .flatMap(v => dirs
    .filter(modFilter(v))
    .apply(batch)
  )
  .apply(uniqSize)

export { dirs, part1, part2 }
