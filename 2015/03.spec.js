import daySpec from './daySpec'
import day from './03'

describe('03', () => {
  const { test1, test2 } = daySpec(day)

  describe('part1', () => {
    it('>', test1(['>'], 2))
    it('^>v<', test1(['^>v<'], 4))
    it('^v^v^v^v^v', test1(['^v^v^v^v^v'], 2))
  })
  describe('part2', () => {
    it('^v', test2(['^v'], 3))
    it('^>v<', test2(['^>v<'], 3))
    it('^v^v^v^v^v', test2(['^v^v^v^v^v'], 11))
  })
})
