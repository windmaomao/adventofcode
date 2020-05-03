import daySpec from './daySpec'
import day from './08'

describe('08', () => {
  const { test1, test2 } = daySpec(day)
  const data = [
    String.raw`""`,
    String.raw`"abc"`,
    String.raw`"aaa\"aaa"`,
    String.raw`"\x27"`,
  ]

  describe('part1', () => {
    it('0', test1([data[0]], 2))
    it('1', test1([data[1]], 2))
    it('2', test1([data[2]], 3))
    it('3', test1([data[3]], 5))
  })

  describe('part2', () => {
    it('0', test2([data[0]], 4))
    it('1', test2([data[1]], 4))
    it('2', test2([data[2]], 6))
    it('3', test2([data[3]], 5))
  })
})
