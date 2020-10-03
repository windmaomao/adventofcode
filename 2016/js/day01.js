import './array'

const N = 1000
const dirs = [N, 1, -N, -1]

const PosDir = (pos, dir) => ({
  pos, dir,
  blocks: () => Math.abs(Math.round(pos / N)) + Math.abs(pos % N)
})

const nextPos = (posDir, ins) => {
  const { pos, dir } = posDir
  let dirNew = dir
  switch(ins[0]) {
    case 'R': dirNew += 1; break;
    case 'L': dirNew -= 1; break;
  }
  if (dirNew > 3) dirNew -= 4
  if (dirNew < 0) dirNew += 4

  return PosDir(
    pos + dirs[dirNew] * parseInt(ins.slice(1)),
    dirNew,
  )
}

const calcBlocks = posDir => {
  const p = posDir.pos
  return Math.abs(Math.round(p / N)) + Math.abs(p % N)
}

const part1 = list => list
  .reduce(nextPos, PosDir(0, 0))
  .blocks()

const part2 = list => {
  const items = list.flatMap(ins => {
    const size = parseInt(ins.slice(1))
    if (size == 1) return [ins]
    return [
      ins[0] + '1',
      ...Array.new(size - 1, 1).map(i => ` ${i}`)
    ]
  }).scan(nextPos, PosDir(0, 0))

  const visited = {}
  for (const item of items) {
    if (visited[`${item.pos}`]) {
      return item.blocks()
    } else {
      visited[`${item.pos}`] = true
    }
  }
}

export { part1, part2 }
