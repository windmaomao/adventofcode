import { expect } from 'chai'
import './utils'
import day from './01'

const { prepare, part1, part2 } = day()
const test1 = (data, res) => () => {
  expect(part1(prepare(data))).to.equal(res)
}
const test2 = (data, res) => () => { 
  expect(part2(prepare(data))).to.equal(res) 
}
describe('01', () => {
  describe('part1', () => {
    it('(())', test1(['(())'], 0))
    it('))(((((', test1(['))((((('], 3))
  })
  describe('part2', () => {
    it(')', test2([')'], 1))
    it('()())', test2(['()())'], 5))
  })
})
