import './array'

describe('array', () => {

  it('range', () => {
    const arr = [1, 2].range()
    expect(arr.length).toEqual(1)
  })

})