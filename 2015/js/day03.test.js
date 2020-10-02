import { dirs, part1, part2 } from './day03'
import read from './read'

const extractDirs = strs => strs.split('').map(c => dirs[c])

describe('2015 Day 03', () => {

  it('part1 example', () => {
    expect(part1(extractDirs('>'))).toEqual(2)
    expect(part1(extractDirs('^>v<'))).toEqual(4)
    expect(part1(extractDirs('^v^v^v^v^v'))).toEqual(2)
  })

  it('part2 example', () => {
    expect(part2(extractDirs('^v'))).toEqual(3)

  })

})
