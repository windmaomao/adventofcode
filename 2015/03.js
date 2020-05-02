const dirs = { '^': [0, 1], 'v': [0, -1], '<': [-1, 0], '>': [1, 0] }
const nextPos = (acc, s, i) => {
  const o = acc[i], dir = dirs[s]
  const pos = o.map((_, i) => o[i] + dir[i])
  return acc.push(pos)
}

const prepare = data => data[0].split('')
const part1 = data => data
  .transform(nextPos, [[0, 0]])

const modFilter = v => (_, i) => i % 2 === v
const part2 = data => [0, 1]
  .flatMap(v => data
    .filter(modFilter(v))
    .transform(nextPos, [[0, 0]])
  )
  
const posKey = p => `${p[0]}x${p[1]}`
const finish = data => data.uniqBy(posKey).length

export default () => ({ prepare, part1, part2, finish })