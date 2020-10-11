import {
  extractEqn, eqnMaps, sortDeps, expr,
  part1, part2
} from './day07'
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
      .toEqual(["123", "x", "456", "y", "e"])
  })

  it('part1 expr', () => {
    const vals = { x: 123, y: 456 }
    expect(expr(vals, sampleEqnsMap.x).x).toEqual(123)
    expect(expr(vals, sampleEqnsMap.y).y).toEqual(456)
    expect(expr(vals, sampleEqnsMap.d).d).toEqual(72)
    expect(expr(vals, sampleEqnsMap.e).e).toEqual(507)
    expect(expr(vals, sampleEqnsMap.f).f).toEqual(492)
    expect(expr(vals, sampleEqnsMap.g).g).toEqual(114)
    expect(expr(vals, sampleEqnsMap.h).h).toEqual(65412)
    expect(expr(vals, sampleEqnsMap.i).i).toEqual(65079)
  })

  it('part1', () => {
    expect(part1(eqnsMap, mapDeps)).toEqual(16076)
  })

  it('part2', () => {
    expect(part2(eqnsMap, mapDeps, 16076)).toEqual(2797)
  })

})
