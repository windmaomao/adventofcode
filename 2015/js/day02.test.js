import { paperSize, bowSize, part1, part2 } from './day02'
import read from './read'

const extractBox = str => str
  .split('x')
  .map(v => parseInt(v))

describe('2015 Day 02', () => {

  const boxes = read('02').map(extractBox)

  it('paper size', () => {
    expect(paperSize([2, 3, 4])).toEqual(58)
    expect(paperSize([1, 1, 10])).toEqual(43)
  })

  it('part1', () => {
    expect(part1(boxes)).toEqual(1588178)
  })

  it('bow size', () => {
    expect(bowSize([2, 3, 4])).toEqual(34)
    expect(bowSize([1, 1, 10])).toEqual(14)
  })

  it('part2', () => {
    expect(part2(boxes)).toEqual(3783758)
  })

})
