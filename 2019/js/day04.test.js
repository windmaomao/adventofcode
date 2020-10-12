import { numValid } from './day04'
// import read from './read'

describe('2019 Day 04', () => {

  // const list = read('')

  it('part1 numValid', () => {
    expect(numValid(111111)).toEqual(true)
    expect(numValid(223450)).toEqual(false)
    expect(numValid(123789)).toEqual(false)
  })

})
