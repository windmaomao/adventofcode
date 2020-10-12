import '../../utils/js/array'

const fuel = m => Math.floor(m / 3) - 2

const part1 = nums => nums
  .map(fuel)
  .sum()

const fuelR = m => {
  let total = 0
  let v = fuel(m)
  while (v > 0) {
    total += v
    v = fuel(v)
  }
  return total
}

const part2 = nums => nums
  .map(fuelR)
  .sum()

export { fuel, fuelR, part1, part2 }