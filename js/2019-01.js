require('./utils/index')
const nums = read('2019', '01', '\n', true)

const fuel = m => Math.floor(m / 3) - 2
const part1 = ns => ns.map(fuel).sum()

const fuelR = m => {
  const v = fuel(m)
  return (v > 0) ? v + fuelR(v) : 0
}
const part2 = ns => ns.map(fuelR).sum()

run(part1, nums)
run(part2, nums)