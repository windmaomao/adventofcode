import { expect } from 'chai'
import './utils'
import day from './02'

const { prepare, part1, part2, finish } = day()
const test1 = (data, res) => () => {
  expect(finish(part1(prepare(data)))).to.equal(res)
}
const test2 = (data, res) => () => {
  expect(finish(part2(prepare(data)))).to.equal(res)
}
describe('02', () => {
  describe('part1', () => {
    it('2x3x4', test1(['2x3x4'], 58))
    it('1x1x10', test1(['1x1x10'], 43))
  })
  describe('part2', () => {
    it('2x3x4', test2(['2x3x4'], 34))
    it('1x1x10', test2(['1x1x10'], 14))
  })
})
