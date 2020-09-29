const floor = s => s === '(' ? 1 : -1

const part1 = ops => ops
  .reduce((acc, v) => acc + v, 0)

export { floor, part1 }
