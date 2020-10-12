import { numValid, numValid2, part1, part2 } from './day04'
import read from './read'

describe('2019 Day 04', () => {

  const range = read('4')[0].split('-').map(Number)

  it('part1 numValid', () => {
    expect(numValid(111111)).toEqual(true)
    expect(numValid(223450)).toEqual(false)
    expect(numValid(123789)).toEqual(false)
  })

  it('part1', () => {
    expect(part1(range)).toEqual(495)
  })

  it('part2 numValid2', () => {
    expect(numValid2(112233)).toEqual(true)
    expect(numValid2(123444)).toEqual(false)
    expect(numValid2(111122)).toEqual(true)
  })

  it('part2', () => {
    expect(part2(range)).toEqual(305)
  })

})
