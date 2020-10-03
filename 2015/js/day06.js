import '../../utils/js/string'
import '../../utils/js/array'

const flags = ['f', 'n', ' ']
const extractOp = str => ({
  type: flags.indexOf(str[6]),
  box: str.extractNumbers()
})

const N = 1000

const toggleLights = toggleFn => (lights, op) => {
  const [l, t, r, b] = op.box
  Array.range(t, b+1).forEach(y => {
    const row = y * N
    Array.range(l, r + 1).forEach(x => {
      const p = row + x
      lights[p] = toggleFn(lights[p], op.type)
    })
  })
  return lights
}

const toggle = (v, type) => [1 - v, type].pickWhen(type > 1)
const part1 = ops => ops
  .reduce(toggleLights(toggle), Array.new(N*N, 0))
  .count(1)

const bright = (v, type) => [Math.max(0, v - 1), v + type]
  .pickWhen(type === 0)
const part2 = ops => ops
  .reduce(toggleLights(bright), Array.new(N*N, 0))
  .sum()

export { extractOp, part1, part2 }
