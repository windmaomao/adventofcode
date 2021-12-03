const bundle = require('./bundle')
const commands = bundle.read('02', '\n', false)
  .map(v => {
    const p =v.split(' ')
    return [p[0], parseInt(p[1])]
  })

const output = o => o.h * o.d

const part1 = ns => output(
  ns.reduce((acc, [i, v]) => {
    if (i == 'forward') acc.h += v
    if (i == 'down') acc.d += v
    if (i == 'up') acc.d -= v
    return acc
  }, { h: 0, d: 0 })
)

bundle.run(part1, commands)

const part2 = ns => output(
  ns.reduce((acc, [i, v]) => {
    if (i == 'down') acc.aim += v
    if (i == 'up') acc.aim -= v
    if (i == 'forward') {
      acc.d += acc.aim * v
      acc.h += v
    }
    return acc
  }, { h: 0, d: 0, aim: 0 })
)

bundle.run(part2, commands)
