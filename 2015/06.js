import { range } from 'lodash'

const flags = ['f', 'n', ' ']
const processData = s => [
  flags.indexOf(s[6]),
  ...s.scan(/(\d+)/g).map(Number)
]

const N = 1000
const initLights = () => new Array(N * N).fill(0)

const toggle = (v, op) => ((op > 1) ? 1 - v : op)
const toggleLights = (lights, v) => {
  const [op, l, t, r, b] = v
  range(t, b + 1).forEach(y => {
    range(l, r + 1).forEach(x => {
      const p = y * N + x
      lights[p] = toggle(lights[p], op)
    })
  })
  return lights
}

const bright = (v, op) => ((op === 0) ? Math.max(0, v - 1) : v + op)
const brightLights = (lights, v) => {
  const [op, l, t, r, b] = v
  range(t, b + 1).forEach(y => {
    range(l, r + 1).forEach(x => {
      const p = y * N + x
      lights[p] = bright(lights[p], op)
    })
  })
  return lights
}
const eqOne = x => x > 0

const prepare = data => data.map(processData)
const part1 = data => data.reduce(toggleLights, initLights()).filter(eqOne).length
const part2 = data => data.reduce(brightLights, initLights()).sum()

export default () => ({ prepare, part1, part2 })
