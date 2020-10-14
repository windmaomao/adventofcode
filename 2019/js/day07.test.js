import { Thruster, part1, ThrusterR, part2 } from './day07'
import read from './read'

describe('2019 Day 07', () => {

  const ops = read('7')[0].split(',').map(Number)

  const example1 = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
  const example2 = [3,23,3,24,1002,24,10,24,1002,23,-1,23,
101,5,23,23,1,24,23,23,4,23,99,0,0]
  const example3 = [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,
1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0]
  const example4 = [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,
27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5]
  const example5 = [3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,
-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,
53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10]

  it.only('part1 Thruster', () => {
    const th = Thruster(example1)
    expect(th.signal([4, 3, 2, 1, 0])).toEqual(43210)
  })

  it.only('part1 example', () => {
    expect(part1(example1)).toEqual(43210)
    expect(part1(example2)).toEqual(54321)
    expect(part1(example3)).toEqual(65210)
  })

  it.only('part1', () => {
    expect(part1(ops)).toEqual(225056)
  })

  it.only('part2 ThrusterR', () => {
    const th = ThrusterR(example4)
    expect(th.signal([9, 8, 7, 6, 5])).toEqual(139629729)
  })

  it.only('part2 example', () => {
    expect(part2(example4)).toEqual(139629729)
    expect(part2(example5)).toEqual(18216)
  })

  it('part2', () => {
    expect(part2(ops)).toEqual(14260332)
  })

})
