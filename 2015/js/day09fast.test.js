import { buildMap, permuteCities } from './day09fast'
import read from './read'

describe('2015 Day 09', () => {

  const sampleMap = buildMap([
    "l to d = 464",
    "l to b = 518",
    "d to b = 141"
  ])
  // const cities = buildMap(read('09'))

  it('part1 permuteCities', () => {
    expect(permuteCities(sampleMap)).toEqual(null)
  })

})
