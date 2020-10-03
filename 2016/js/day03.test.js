import { possible, part1 } from './day03'
import './string'
import read from './read'

describe('2016 Day 03', () => {

  const list = read('03').map(str => str.extractNumbers())

  it('part1 extract', () => {
    expect('  1  2  33'.extractNumbers()).toEqual([1, 2, 33])
  })

  it('part1 possible', () => {
    expect(possible([5, 10, 25])).toEqual(false)
  })

  it('part1', () => {
    expect(part1(list)).toEqual(993)
  })


})
