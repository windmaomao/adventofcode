import { Intcode } from './day09'
import '../../utils/js/math'
import '../../utils/js/number'

const nextDir = (d, c) => {
  let dn = d
  if (c) { dn++ } else { dn-- }
  return dn.mod(4)
}

const poses = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const nextPos = (pos, d) => Math.plusN(pos, poses[d])

const Hull = ops => {
  const ic = Intcode(ops, [])
  const paints = {}
  let currPos = [0, 0]
  let currDir = 0

  const posKey = p => `${p[0]}x${p[1]}`
  const paint = (p, c) => { paints[posKey(p)] = c }
  const color = p => paints[posKey(p)]

  const step = () => {
    const c = color(currPos) || 0
    const nc = ic.nextOutput(c)
    paint(currPos, nc)
    const nd = ic.nextOutput()
    currDir = nextDir(currDir, nd)
    currPos = nextPos(currPos, currDir)
    return !ic.halted()
  }

  const run = () => {
    while (step()) {}
    return Object.keys(paints).length
  }

  return { step, paints, run }
}

export { Hull }


// black . ; white #
// const part1 = (ops, init = 0) => {
//   const m = {}
//   const ic = Intcode(ops)
//   let i = 0
//   while (i < 1) {
//     const pColor = color(curpos)
//     const color = ic.nextOutput(init)
//     const dir = ic.nextOutput()
//     curPos = nextPos(curPos, dir)
//   }
// }