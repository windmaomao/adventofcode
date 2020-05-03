import daySpec from './daySpec'
import day from './01'

describe('01', () => {
  const { test1, test2 } = daySpec(day)

  describe('part1', () => {
    it('(())', test1(['(())'], 0))
    it('))(((((', test1(['))((((('], 3))
  })
  describe('part2', () => {
    it(')', test2([')'], 1))
    it('()())', test2(['()())'], 5))
  })
})
