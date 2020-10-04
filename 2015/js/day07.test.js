import { extractEqn, eqnMaps, sortDeps, part1 } from './day07'
import read from './read'

describe('2015 Day 07', () => {

  const eqns = read('07').map(extractEqn)
  const maps = eqnMaps(eqns)
  const deps = sortDeps(maps, 'a')

  it('part1 extractEqn', () => {
    expect(extractEqn('f -> y').name).toEqual('y')
    expect(extractEqn('12 -> x').nums).toEqual(['12'])
    expect(extractEqn('x X 2 -> f').ops).toEqual(['X'])
    expect(extractEqn('N 2 -> f').vars).toEqual([])
  })

  it('part1 sortDeps', () => {
    const m = [
      "123 -> x",
      "456 -> y",
      "x AND y -> d",
      "x OR y -> e",
      "x LSHIFT 2 -> f",
      "y RSHIFT 2 -> g",
      "NOT x -> h",
      "NOT y -> i"
    ].map(extractEqn).apply(eqnMaps)
    expect(sortDeps(m, 'e')).toEqual(["x", "y", "e"])
  })

  it('part1', () => {
    expect(part1(maps, deps)).toEqual(14687245)
  })

})
