import daySpec from './daySpec'
import day from './05'

describe('05', () => {
  const { test1, test2 } = daySpec(day)

  describe('part1', () => {
    it('ugknbfddgicrmopn', test1(['ugknbfddgicrmopn'], 1))
    it('aaa', test1(['aaa'], 1))
    it('jchzalrnumimnmhp', test1(['jchzalrnumimnmhp'], 0))
    it('haegwjzuvuyypxyu', test1(['haegwjzuvuyypxyu'], 0))
    it('dvszwmarrgswjxmb', test1(['dvszwmarrgswjxmb'], 0))
  })

  describe('part2', () => {
    it('qjhvhtzxzqqjkmpb', test2(['qjhvhtzxzqqjkmpb'], 1))
    it('xxyxx', test2(['xxyxx'], 1))
    it('uurcxstgmygtbstg', test2(['uurcxstgmygtbstg'], 0))
    it('ieodomkazucvgmuy', test2(['ieodomkazucvgmuy'], 0))
  })
})
