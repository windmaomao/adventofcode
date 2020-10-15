import { Hull, part1, part2 } from './day11'
import read from './read'

describe('2019 Day 11', () => {

  const ops = read('11')[0].split(',').map(Number)

  it('part1', () => {
    expect(part1(ops)).toEqual(2322)
  })

  it('part2', () => {
    expect(part2(ops)).toEqual(250)
  })

})
