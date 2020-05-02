import { expect } from 'chai'
import './utils'
import day from './01'

const _s = str => str.split('')
const test1 = (data, res) => () => {
  expect(day().part1(_s(data))).to.equal(res)
}
const test2 = (data, res) => () => { 
  expect(day().part2(_s(data))).to.equal(res) 
}
describe('01', () => {
  describe('part1', () => {
    it('(())', test1('(())', 0))
    it('(((', test1('(((', 3))
    it('))(((((', test1('))(((((', 3))
    it('))(', test1('))(', -1))
  })
  describe('part2', () => {
    it(')', test2(')', 1))
    it('()())', test2('()())', 5))
  })
})
