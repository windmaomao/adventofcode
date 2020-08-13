import daySpec from './daySpec'
import day from './09'

const { test1 } = daySpec(day)
const data = [
  'London to Dublin = 464',
  'London to Belfast = 518',
  'Dublin to Belfast = 141',
]

describe('09', () => {
  const res = test1(data)

  describe('part1', () => {
    it('0', test1(data, 0))
  })

})
