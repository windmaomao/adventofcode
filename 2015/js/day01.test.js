import { floor, part1, part2 } from './day01'
import read from './read'

const extractOps = strs => strs.split('').map(floor)

describe('2015 Day 01', () => {

  const ops = extractOps(read('01')[0])

  it('floor util', () => {
    expect(floor('(')).toEqual(1)
    expect(floor(')')).toEqual(-1)
  })

  it('part1 example', () => {
    expect(part1(extractOps("(())"))).toEqual(0)
    expect(part1(extractOps("((("))).toEqual(3)
    expect(part1(extractOps(")())())"))).toEqual(-3)
  })

  it('part1', () => {
    expect(part1(ops)).toEqual(280)
  })

  it('part2', () => {
    expect(part2(ops)).toEqual(1797)
  })

})
