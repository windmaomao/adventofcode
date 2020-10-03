import './number'
import './array'

const nextDirId = (dirId, c) => {
  let dn = dirId
  switch(c) {
    case 'R': dn++; break;
    case 'L': dn--; break;
  }
  return dn.mod(4)
}

const nextDirPos = (pos, dirId) => {
  let pos2 = [...pos]
  switch(dirId) {
    case 0: pos2[1]++; break;
    case 1: pos2[0]++; break;
    case 2: pos2[1]--; break;
    case 3: pos2[0]--; break;
  }
  return pos2
}

const allSteps = list => list.flatMap(ins => {
  const size = parseInt(ins.slice(1))
  if (size == 1) return [ins[0]]
  return [ins[0], ...Array.new(size - 1, ' ')]
})

const nextStep = (acc, c) => {
  const dirId = nextDirId(acc.dirId, c)
  const pos = nextDirPos(acc.pos, dirId)
  return { dirId, pos }
}

const part1 = list => list
  .apply(allSteps)
  .reduce(nextStep, { dirId: 0, pos: [0, 0] })
  .pos.sum(Math.abs)

const secondPos = poses => {
  const visited = {}
  for (const p of poses) {
    const k = `${p[0]}x${p[1]}`
    if (visited[k]) return p
    visited[k] = true
  }
  return [0, 0]
}

const part2 = list => list
  .apply(allSteps)
  .scan(nextStep, { dirId: 0, pos: [0, 0] })
  .map(v => v.pos)
  .apply(secondPos)
  .sum(Math.abs)

export { nextDirId, nextDirPos, part1, part2 }
