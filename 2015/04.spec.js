import daySpec from './daySpec'
import day from './04'

describe('04', () => {
  const { test1 } = daySpec(day)

  describe('part1', () => {
    it('abcdef', test1(['abcdef'], 609043))
    it('pqrstuv', test1(['pqrstuv'], 1048970))
  })
})
