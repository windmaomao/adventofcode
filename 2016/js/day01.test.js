import { part1, part2 } from './day01'
// import read from './read'

const extractIns = strs => strs.split(', ')

describe('2016 Day 01', () => {

  it('part1 example', () => {
    expect(part1(extractIns("R2, L3"))).toEqual(5)
    expect(part1(extractIns("R2, R2, R2"))).toEqual(2)
    expect(part1(extractIns("R5, L5, R5, R3"))).toEqual(12)
  })

})
