import '../../utils/js/array'
import '../../utils/js/math'

const symbols = [1, -1]
const floor = s => symbols.pickWhen(s == '(')

const part1 = ops => ops.sum()

const part2 = ops => ops
  .scan(Math.plus, 0)
  .indexOf(-1)

export { floor, part1, part2 }
