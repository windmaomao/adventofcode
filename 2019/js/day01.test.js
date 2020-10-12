import { fuel, fuelR, part1, part2 } from './day01'
import read from './read'

describe('2019 Day 01', () => {

  const nums = read('1').map(Number)

  it('part1 fuel', () => {
    expect(fuel(12)).toEqual(2)
    expect(fuel(14)).toEqual(2)
    expect(fuel(1969)).toEqual(654)
    expect(fuel(100756)).toEqual(33583)
  })

  it('part1', () => {
    expect(part1(nums)).toEqual(3404722)
  })

  it('part2 fuelR', () => {
    expect(fuelR(14)).toEqual(2)
    expect(fuelR(1969)).toEqual(966)
    expect(fuelR(100756)).toEqual(50346)
  })

  it('part2', () => {
    expect(part2(nums)).toEqual(5104215)
  })

})
