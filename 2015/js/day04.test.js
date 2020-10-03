import { md5Match, part1, part2 } from './day04'
import read from './read'

describe('2015 Day 04', () => {

  const secret = read('04')[0]

  it('part1 md5Match', () => {
    expect(md5Match('abcdef', 5)(609043)).toEqual(true)
    expect(md5Match('pqrstuv', 5)(1048970)).toEqual(true)
  })

  it('part1', () => {
    expect(part1(secret)).toEqual(254575)
  })

  it('part2', () => {
    expect(part2(secret)).toEqual(1038736)
  })
})
