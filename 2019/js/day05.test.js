import { Intcode, part1 } from './day05'
import read from './read'

describe('2019 Day 05', () => {

  const ops = read('5')[0].split(',').map(Number)

  it('part1 example', () => {
    expect(Intcode([1002,4,3,4,33]).run()[4]).toEqual(99)
    expect(Intcode([1101,100,-1,4,0]).run()[4]).toEqual(99)
  })

  it('part1', () => {
    const ic = Intcode(ops, [1])
    ic.run()
    expect(ic.outputs.pop()).toEqual(13294380)
  })

})
