import { numValid, part1 } from './day04'
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

})
