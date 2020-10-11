import { buildMap, permuteCities, part1, part2 } from './day09dfs'
import read from './read'

describe('2015 Day 09', () => {

  const sampleMap = buildMap([
    "l to d = 464",
    "l to b = 518",
    "d to b = 141"
  ])
  const cities = buildMap(read('09'))

  it('part1 example', () => {
    expect(part1(sampleMap)).toEqual(605)
  })

  it('part1', () => {
    expect(part1(cities)).toEqual(141)
  })

  it('part2', () => {
    expect(part2(cities)).toEqual(736)
  })

})
