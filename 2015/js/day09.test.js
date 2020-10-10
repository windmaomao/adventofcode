import { buildMap, mapUtil, part1, part2 } from './day09'
import read from './read'

describe('2015 Day 09', () => {

  const sampleMap = buildMap([
    "l to d = 464",
    "l to b = 518",
    "d to b = 141"
  ])
  const cities = buildMap(read('09'))

  it('part1 calcDist', () => {
    const dist = mapUtil(sampleMap).calcDist
    expect(dist(0, ['l', 'd'])).toEqual(464)
    expect(dist(0, ['d', 'l'])).toEqual(464)
    expect(dist(0, ['d', 'b'])).toEqual(141)
    expect(dist(0, ['a', 'b'])).toEqual(-1)
  })

  it('part1 pathDist', () => {
    const dist = mapUtil(sampleMap).pathDist
    expect(dist(['d', 'l', 'b'])).toEqual(982)
    expect(dist(['l', 'd', 'b'])).toEqual(605)
    expect(dist(['l', 'b', 'd'])).toEqual(659)
    expect(dist(['d', 'b', 'l'])).toEqual(659)
    expect(dist(['b', 'd', 'l'])).toEqual(605)
    expect(dist(['b', 'l', 'd'])).toEqual(982)
  })

  it('part1 example', () => {
    expect(part1(sampleMap)).toEqual(605)
  })

  it('part1', () => {
    expect(part1(cities)).toEqual(141)
  })

  it('part1', () => {
    expect(part2(cities)).toEqual(736)
  })

})
