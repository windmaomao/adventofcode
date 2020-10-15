import { Game, part1 } from './day13'
import read from './read'

describe('2019 Day 13', () => {

  const ops = read('13')[0].split(',').map(Number)

  it('part1', () => {
    expect(part1(ops)).toEqual(326)
  })

})
