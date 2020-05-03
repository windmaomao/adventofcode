import daySpec from './daySpec'
import day from './07'

const { prepare, part1 } = day()
const data = [
  '123 -> x',
  '456 -> y',
  'x AND y -> d',
  'x OR y -> e',
  'x LSHIFT 2 -> f',
  'y RSHIFT 2 -> g',
  'NOT x -> h',
  'NOT y -> i',
]

describe('07', () => {
  const val = part1(prepare(data)).val
  const test = (d, v) => () => { expect(val[d]).toEqual(v) }
  
  it('d', test('d', 72))
  it('e', test('e', 507))
  it('f', test('f', 492))
  it('g', test('g', 114))
  it('h', test('h', 65412))
  it('i', test('i', 65079))
  it('x', test('x', 123))
  it('y', test('y', 456))
})
