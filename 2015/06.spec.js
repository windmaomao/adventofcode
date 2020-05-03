import daySpec from './daySpec'
import day from './06'

describe('06', () => {
  const { test1, test2 } = daySpec(day)

  describe('part1', () => {
    const data = [
      'turn on 0,0 through 999,999',
      'toggle 0,0 through 999,0',
      'turn off 499,499 through 500,500'
    ]
    it('1', test1(data.take(1), 1000000))
    it('2', test1(data.take(2), 1000000 - 1000))
    it('3', test1(data.take(3), 1000000 - 1000 - 4))
  })

  describe('part2', () => {
    const data = [
      'turn on 0,0 through 0,0',
      'toggle 0,0 through 999,999'
    ]
    it('1', test2(data.take(1), 1))
    it('2', test2(data.take(2), 1 + 2000000))
  })
})
