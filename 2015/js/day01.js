import _ from 'lazy.js'

const floor = s => s === '(' ? 1 : -1

const part1 = ops => ops
  .reduce((acc, v) => acc + v, 0)

const part2 = ops => {
  var acc = 0
  return _(ops)
    .map(v => (acc += v))
    .indexOf(-1) + 1
}

export { floor, part1, part2 }
