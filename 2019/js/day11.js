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

const Hull = (ops, bg = 0) => {
  const ic = Intcode(ops, [])
  const paints = {}
  let currPos = [0, 0]
  let currDir = 0

  const posKey = p => `${p[0]}x${p[1]}`
  const paint = (p, c) => { paints[posKey(p)] = c }
  const color = p => paints[posKey(p)]

  const step = () => {
    const c = color(currPos) || bg
    const nc = ic.nextOutput(c)
    paint(currPos, nc)
    const nd = ic.nextOutput()
    currDir = nextDir(currDir, nd)
    currPos = nextPos(currPos, currDir)
    return !ic.halted()
  }

  const run = () => {
    while (step()) {}
  }

  return { step, paints, run }
}

const part1 = ops => {
  const h = Hull(ops)
  h.run()
  return Object.keys(h.paints).length
}

const part2 = ops => {
  const h = Hull(ops, 1)
  h.run()
  const delta = [0, 5]
  const r = [43, 6]
  const strs = Array.new(r[1], '').map(s => Array.new(r[0], ' '))
  for (const [key, value] of Object.entries(h.paints)) {
    const p = Math.plusN(key.split('x').map(Number), delta)
    strs[p[1]][p[0]] = value ? '@' : ' '
  }
  console.log(strs.map(s => s.join('')).reverse())
  return Object.keys(h.paints).length
}

export { Hull, part1, part2 }
