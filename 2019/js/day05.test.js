import { Intcode, part1 } from './day05'
import read from './read'

describe('2019 Day 05', () => {

  const ops = read('5')[0].split(',').map(Number)

  it('part1 example', () => {
    expect(Intcode([1002,4,3,4,33]).run()[4]).toEqual(99)
    expect(Intcode([1101,100,-1,4,0]).run()[4]).toEqual(99)
  })

  it('part1', () => {
    expect(Intcode(ops).runOutput(1)).toEqual(13294380)
  })

  // it('part2 example', () => {
  //   expect(Intcode([3,9,8,9,10,9,4,9,99,-1,8], [8]).runOutput()).toEqual(1)
  //   expect(Intcode([3,9,8,9,10,9,4,9,99,-1,8], [7]).runOutput()).toEqual(0)
  //   expect(Intcode([3,9,7,9,10,9,4,9,99,-1,8], [8]).runOutput()).toEqual(0)
  //   expect(Intcode([3,9,7,9,10,9,4,9,99,-1,8], [7]).runOutput()).toEqual(1)
  //   expect(Intcode([3,3,1108,-1,8,3,4,3,99], [8]).runOutput()).toEqual(1)
  //   expect(Intcode([3,3,1108,-1,8,3,4,3,99], [7]).runOutput()).toEqual(0)
  //   expect(Intcode([3,3,1107,-1,8,3,4,3,99], [8]).runOutput()).toEqual(0)
  //   expect(Intcode([3,3,1107,-1,8,3,4,3,99], [7]).runOutput()).toEqual(1)
  //   expect(Intcode([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], [0]).runOutput()).toEqual(0)
  //   expect(Intcode([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], [1]).runOutput()).toEqual(1)
  //   expect(Intcode([3,3,1105,-1,9,1101,0,0,12,4,12,99,1], [0]).runOutput()).toEqual(0)
  //   expect(Intcode([3,3,1105,-1,9,1101,0,0,12,4,12,99,1], [1]).runOutput()).toEqual(1)
  // })
  //
  // it('part2 example large', () => {
  //   const cc = [
  //     3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
  //     1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
  //     999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99
  //   ]
  //   expect(Intcode(cc, [7]).runOutput()).toEqual(999)
  //   expect(Intcode(cc, [8]).runOutput()).toEqual(1000)
  //   expect(Intcode(cc, [9]).runOutput()).toEqual(1001)
  // })
  //
  // it('part2', () => {
  //   expect(Intcode(ops, [5]).runOutput()).toEqual(11460760)
  // })

})
