import daySpec from './daySpec'
import day from './02'

describe('02', () => {
  const { test1, test2 } = daySpec(day)

  describe('part1', () => {
    it('2x3x4', test1(['2x3x4'], 58))
    it('1x1x10', test1(['1x1x10'], 43))
  })
  describe('part2', () => {
    it('2x3x4', test2(['2x3x4'], 34))
    it('1x1x10', test2(['1x1x10'], 14))
  })
})
