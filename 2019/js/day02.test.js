import { Intcode } from './day02'
// import read from './read'

describe('2019 Day 02', () => {

  it('part1 Intcode', () => {
    expect(Intcode([1,0,0,0,99]).run()[0]).toEqual(2)
  })

})
