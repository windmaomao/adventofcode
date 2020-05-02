import { expect } from 'chai'
import './utils'
import day from './02'

const _s = arr => arr.map(v => v.split('x').map(Number))
const test1 = (data, res) => () => {
  expect(day().part1(_s(data))[0]).to.equal(res)
}
const test2 = (data, res) => () => {
  expect(day().part2(_s(data))[0]).to.equal(res)
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
