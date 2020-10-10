import { diff, part1, diff2, part2 } from './day08'
import read from './read'

describe('2015 Day 08', () => {

  const lines = read('08')

  it('part1 example', () => {
    expect(diff(`""`)).toEqual(2)
    expect(diff(`"abc"`)).toEqual(2)
    expect(diff(`"aaa\\"aaa"`)).toEqual(3)
    expect(diff(`"\\x27"`)).toEqual(5)
  })

  it('part1', () => {
    expect(part1(lines)).toEqual(1342)
  })

  it('part2 example', () => {
    expect(diff2(`""`)).toEqual(4)
    expect(diff2(`"abc"`)).toEqual(4)
    expect(diff2(`"aaa\\"aaa"`)).toEqual(6)
    expect(diff(`"\\x27"`)).toEqual(5)
  })

  it('part2', () => {
    expect(part2(lines)).toEqual(2074)
  })

})
