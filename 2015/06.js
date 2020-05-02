import { range } from 'lodash'

const flags = ['f', 'n', ' ']
const processData = s => [
  flags.indexOf(s[6]),
  ...s.scan(/(\d+)/g).map(Number)
]

const N = 1000
const initLights = () => Array.new(N * N, 0)

const toggle = (v, op) => ((op > 1) ? 1 - v : op)
const bright = (v, op) => ((op === 0) ? Math.max(0, v - 1) : v + op)
const toggleLights = toggleFn => (lights, v) => {
  const [op, l, t, r, b] = v
  range(t, b + 1).forEach(y => {
    const row = y * N
    range(l, r + 1).forEach(x => {
      const p = row + x
      lights[p] = toggleFn(lights[p], op)
    })
  })
  return lights
}

const prepare = data => data.map(processData)
const part1 = data => data
  .reduce(toggleLights(toggle), initLights())
  .filter(Math.sign).length
const part2 = data => data
  .reduce(toggleLights(bright), initLights())
  .sum()

export default () => ({ prepare, part1, part2 })
