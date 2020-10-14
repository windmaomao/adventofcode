import { Hull } from './day11'
import read from './read'

describe('2019 Day 11', () => {

  const ops = read('11')[0].split(',').map(Number)

  it('part1', () => {
    expect(Hull(ops).run()).toEqual(2322)
  })

})
