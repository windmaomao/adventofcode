import { strMatch, strMatch2, part1, part2 } from './day05'
import read from './read'

describe('2015 Day 05', () => {

  const lines = read('05')

  it('part1 strMatch', () => {
    expect(strMatch('ugknbfddgicrmopn')).toEqual(true)
    expect(strMatch('aaa')).toEqual(true)
    expect(strMatch('jchzalrnumimnmhp')).toEqual(false)
    expect(strMatch('haegwjzuvuyypxyu')).toEqual(false)
    expect(strMatch('dvszwmarrgswjxmb')).toEqual(false)
  })

  it('part1', () => {
    expect(part1(lines)).toEqual(255)
  })

  it('part2 strMatch2', () => {
    expect(strMatch2('qjhvhtzxzqqjkmpb')).toEqual(true)
    expect(strMatch2('xxyxx')).toEqual(true)
    expect(strMatch2('uurcxstgmygtbstg')).toEqual(false)
    expect(strMatch2('ieodomkazucvgmuy')).toEqual(false)
  })

  it('part2', () => {
    expect(part2(lines)).toEqual(55)
  })
})
