import { floor } from './day01'

describe('2015 Day 01', () => {
  it('floor', () => {
    expect(floor('(')).toEqual(1)
    expect(floor(')')).toEqual(-1)
  })

})
