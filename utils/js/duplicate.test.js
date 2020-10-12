import duplicate from './duplicate'

describe('duplicate', () => {

  it('one element', () => {
    expect(duplicate([1])).toEqual([])
  })

  it('two element', () => {
    expect(duplicate([1, 2])).toEqual([])
    expect(duplicate([1, 1])).toEqual([[1, 1]])
  })

  it('more element', () => {
    expect(duplicate([1, 2, 3, 1, 2])).toEqual([[1, 1], [2, 2]])
  })

  it('object element', () => {
    expect(duplicate(
      [[0, 0], [0, 1], [0, 1]],
      v => v.join('x')
    )).toEqual([
      [[0, 1], [0, 1]]
    ])
  })

})
