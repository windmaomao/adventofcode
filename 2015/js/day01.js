import './array'
import '../../utils/js/math'

const floor = s => s == '(' ? 1 : -1

const part1 = ops => ops.sum()

const part2 = ops => ops
  .scan(Math.plus, 0)
  .indexOf(-1)

export { floor, part1, part2 }
