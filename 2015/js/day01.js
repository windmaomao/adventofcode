import _ from 'lodash'

const floor = s => s === '(' ? 1 : -1

const part1 = ops => ops
  .reduce((acc, v) => acc + v, 0)

const part2 = ops => {
  var acc = 0
  const dd = ops.map(v => {
    acc += v
    return acc
  })
  return dd.indexOf(-1) + 1
}

export { floor, part1, part2 }
