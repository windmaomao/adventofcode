import '../../utils/js/array'

const fuel = m => Math.floor(m / 3) - 2

const part1 = nums => nums
  .map(fuel)
  .sum()

const fuelR = (m) => {
  const v = fuel(m)
  return (v > 0) ? v + fuelR(v) : 0
}

const part2 = nums => nums
  .map(fuelR)
  .sum()

export { fuel, fuelR, part1, part2 }