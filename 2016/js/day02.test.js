import { nextStep, part1, part2 } from './day02'
import read from './read'

describe('2016 Day 02', () => {
  const examples = [
    'ULL',
    'RRDDD',
    'LURDL',
    'UUUUD'
  ]
  const lines = read('02')

  it('part1 nextStep', () => {
    expect(nextStep(5, 'U')).toEqual(2)
    expect(nextStep(2, 'L')).toEqual(1)
    expect(nextStep(1, 'L')).toEqual(1)
  })

  it('part1 example', () => {
    expect(part1(examples)).toEqual([1,9,8,5])
  })

  it('part1', () => {
    expect(part1(lines)).toEqual([1,2,5,7,8])
  })

  it('part2 example', () => {
    expect(part2(examples)).toEqual('5DB3')
  })

  it('part2', () => {
    expect(part2(lines)).toEqual('516DD')
  })

})
