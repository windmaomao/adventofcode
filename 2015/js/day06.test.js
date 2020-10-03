import { extractOp, part1, part2 } from './day06'
import read from './read'

describe('2015 Day 06', () => {

  const ops = read('06').map(extractOp)

  it('part1', () => {
    expect(part1(ops)).toEqual(543903)
  })

  it('part2', () => {
    expect(part2(ops)).toEqual(14687245)
  })

})
