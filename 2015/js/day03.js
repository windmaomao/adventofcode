import '../../utils/js/array'
import '../../utils/js/math'

const dirs = {
  '^': [0, 1], 'v': [0, -1],
  '<': [-1, 0], '>': [1, 0]
}

const batch = dirs => dirs
  .scan(Math.plusN, [0,0])

const posKey = p => `${p[0]}x${p[1]}`
const uniqSize = dirs => dirs
  .uniqBy(posKey)
  .length

const part1 = dirs => dirs
  .then(batch)
  .then(uniqSize)

const part2 = dirs => dirs
  .chunkMod(2)
  .flatMap(batch)
  .then(uniqSize)

export { dirs, part1, part2 }
