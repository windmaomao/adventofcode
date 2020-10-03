import './array'

describe('array', () => {

  it('range', () => {
    const arr = Array.range(1, 2)
    expect(arr.length).toEqual(1)
  })

})