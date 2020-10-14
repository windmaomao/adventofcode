import { Intcode } from './day09'
import read from './read'

describe('2019 Day 09', () => {

  const ops = read('9')[0].split(',').map(Number)

  it('part1 example', () => {
    expect(Intcode([109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99]).nextOutput()).toEqual(109)
    expect(Intcode([1102,34915192,34915192,7,4,7,99,0]).nextOutput()).toEqual(1219070632396864)
    expect(Intcode([104,1125899906842624,99]).nextOutput()).toEqual(1125899906842624)
  })

  it('part1', () => {
    expect(Intcode(ops, []).nextOutput(1)).toEqual(2351176124)
  })

})
