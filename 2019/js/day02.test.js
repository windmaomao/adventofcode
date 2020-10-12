import { Intcode, part1 } from './day02'
import read from './read'

describe('2019 Day 02', () => {

  const ops = read('2')[0].split(',').map(Number)

  it('part1 Intcode', () => {
    expect(Intcode([1,0,0,0,99]).run()[0]).toEqual(2)
    expect(Intcode([2,3,0,3,99]).run()[3]).toEqual(6)
    expect(Intcode([2,4,4,5,99,0]).run()[5]).toEqual(9801)
    expect(Intcode([1,1,1,4,99,5,6,0,99]).run()[0]).toEqual(30)
  })

  it('part1', () => {
    ops[1] = 12
    ops[2] = 2
    expect(part1(ops)).toEqual(4690667)
  })

})
