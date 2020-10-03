import { nextDirId, nextDirPos, part1, part2 } from './day01'
import read from './read'

const extractIns = strs => strs.split(', ')

describe('2016 Day 01', () => {

  const list = extractIns(read('01')[0])

  it('part1 nextDirId', () => {
    expect(nextDirId(0, 'R')).toEqual(1)
    expect(nextDirId(3, 'R')).toEqual(0)
    expect(nextDirId(3, 'L')).toEqual(2)
    expect(nextDirId(0, 'L')).toEqual(3)
    expect(nextDirId(3, ' ')).toEqual(3)
  })

  it('part1 nextDirPos', () => {
    expect(nextDirPos([0, 0], 0)).toEqual([0, 1])
    expect(nextDirPos([0, 0], 1)).toEqual([1, 0])
    expect(nextDirPos([0, 0], 2)).toEqual([0, -1])
    expect(nextDirPos([0, 0], 3)).toEqual([-1, 0])
  })

  it('part1 example', () => {
    expect(part1(extractIns("R2, L3"))).toEqual(5)
    expect(part1(extractIns("R2, R2, R2"))).toEqual(2)
    expect(part1(extractIns("R5, L5, R5, R3"))).toEqual(12)
  })

  it('part1', () => {
    expect(part1(list)).toEqual(307)
  })

  it('part2 example', () => {
    expect(part2(extractIns("R8, R4, R4, R8"))).toEqual(4)
  })

  it('part2', () => {
    expect(part2(list)).toEqual(165)
  })
})
