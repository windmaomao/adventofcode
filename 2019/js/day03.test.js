import { extractIns, part1, part2 } from './day03'
import read from './read'

describe('2019 Day 03', () => {

  const list = read('3')

  const example0 = ['R8,U5,L5,D3', 'U7,R6,D4,L4']
  const example1 = [
    'R75,D30,R83,U83,L12,D49,R71,U7,L72',
    'U62,R66,U55,R34,D71,R55,D58,R83'
  ]
  const example2 = [
    'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
    'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
  ]

  it('part1 extractIns', () => {
    expect(extractIns('D1')).toEqual(['D'])
    expect(extractIns('D3')).toEqual(['D', 'D', 'D'])
    expect(extractIns('A1,B2')).toEqual(['A', 'B', 'B'])
  })

  it('part1 example', () => {
    expect(part1(example0)).toEqual(6)
    expect(part1(example1)).toEqual(159)
    expect(part1(example2)).toEqual(135)
  })

  it('part1', () => {
    expect(part1(list)).toEqual(266)
  })

  it('part2 example', () => {
    expect(part2(example0)).toEqual(30)
    expect(part2(example1)).toEqual(610)
    expect(part2(example2)).toEqual(410)
  })

  it('part2', () => {
    expect(part2(list)).toEqual(19242)
  })

})
