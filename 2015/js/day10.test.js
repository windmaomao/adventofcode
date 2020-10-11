import { lookAndSay, part1, part2 } from './day10'
import read from './read'

describe('2015 Day 10', () => {

  const input = read('10')[0]

  it('part1 lookAndSay', () => {
    expect(lookAndSay('1')).toEqual('11')
    expect(lookAndSay('11')).toEqual('21')
    expect(lookAndSay('21')).toEqual('1211')
    expect(lookAndSay('1211')).toEqual('111221')
    expect(lookAndSay('111221')).toEqual('312211')
  })

  it('part1', () => {
    expect(part1(input)).toEqual(492982)
  })

  it('part2', () => {
    expect(part2(input)).toEqual(6989950)
  })

})
