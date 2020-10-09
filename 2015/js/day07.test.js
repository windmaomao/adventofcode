import { extractEqn, eqnMaps, sortDeps, expr, part1 } from './day07'
import read from './read'

describe('2015 Day 07', () => {

  const eqns = read('07').map(extractEqn)
  const eqnsMap = eqnMaps(eqns)
  const mapDeps = sortDeps(eqnsMap, 'a')
  const sampleEqnsMap = [
    "123 -> x",
    "456 -> y",
    "x AND y -> d",
    "x OR y -> e",
    "x LSHIFT 2 -> f",
    "y RSHIFT 2 -> g",
    "NOT x -> h",
    "NOT y -> i"
  ].map(extractEqn).then(eqnMaps)

  it('part1 extractEqn', () => {
    expect(extractEqn('f -> y').name).toEqual('y')
    expect(extractEqn('x X 2 -> f').vars).toEqual(['x', '2'])
    expect(extractEqn('N 2 -> f').vars).toEqual(['2'])
  })

  it('part1 sortDeps', () => {
    expect(sortDeps(sampleEqnsMap, 'e'))
      .toEqual(["123", "456", "x", "y", "e"])
  })

  it('part1 expr', () => {
    const vals = { x: 123, y: 456 }
    expect(expr(sampleEqnsMap.x, vals)).toEqual(123)
    expect(expr(sampleEqnsMap.y, vals)).toEqual(456)
    expect(expr(sampleEqnsMap.d, vals)).toEqual(72)
    expect(expr(sampleEqnsMap.e, vals)).toEqual(507)
    expect(expr(sampleEqnsMap.f, vals)).toEqual(492)
    expect(expr(sampleEqnsMap.g, vals)).toEqual(114)
    expect(expr(sampleEqnsMap.h, vals)).toEqual(65412)
    expect(expr(sampleEqnsMap.i, vals)).toEqual(65079)
  })

  it('part1', () => {
    expect(part1(eqnsMap, mapDeps)).toEqual({})
  })

})
