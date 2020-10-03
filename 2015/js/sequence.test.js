import './sequence'

describe('sequence', () => {

  it('generate', () => {
    const arr = [].generate(v => v, 3)
    expect(arr.length()).toEqual(3)
    expect(arr.toArray()).toEqual([0, 1, 2])
  })

})