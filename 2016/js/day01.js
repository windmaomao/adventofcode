import './array'

const N = 1000
const dirs = [N, 1, -N, -1]

// const PosDir = () => {
//   var pos = 0
//   var dir = 0
//
//   const move = ins => {
//     let dirNew = (ins[0] === 'R' ? 1 : -1) + dir
//     if (dirNew > 3) dirNew -= 4
//     if (dirNew < 0) dirNew += 4
//     dir = dirNew
//     pos += dirs[dirNew] * parseInt(ins.slice(1)),
//   }
//
//   return {
//     pos, dir
//   }
// }

const nextPos = (posDir, ins) => {
  const { pos, dir } = posDir
  let dirNew = (ins[0] === 'R' ? 1 : -1) + dir
  if (dirNew > 3) dir -= 4
  if (dirNew < 0) dir += 4

  return {
    pos: pos + dirs[dirNew] * parseInt(ins.slice(1)),
    dir: dirNew,
  }
}

const calcBlocks = posDir => {
  const p = posDir.pos
  return Math.abs(Math.round(p / N)) + Math.abs(p % N)
}

const part1 = list => calcBlocks(list
  .reduce(nextPos, { pos: 0, dir: 0 }))

export { part1 }
