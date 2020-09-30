import _ from 'lazy.js'
import './array'

const floor = s => s === '(' ? 1 : -1

const part1 = ops => ops.sum()

const part2 = ops => ops
  .scan((acc, v) => acc + v, 0)
  .indexOf(-1)

export { floor, part1, part2 }
