import windowed from './windowed'

describe('windowed', () => {

  it('no element', () => {
    expect(windowed([])).toEqual([])
  })

  it('less than size', () => {
    expect(windowed([1])).toEqual([])
  })

  it('two elements', () => {
    expect(windowed([1, 2])).toEqual([[1, 2]])
  })

  it('three elements', () => {
    expect(windowed([1, 2, 3])).toEqual([[1, 2], [2, 3]])
  })

  it('size 3', () => {
    expect(windowed([1, 2, 3], 3)).toEqual([[1, 2, 3]])
  })

  it('four elements, size 3', () => {
    expect(windowed([1, 2, 3, 4], 3)).toEqual([
      [1, 2, 3], [2, 3, 4]
    ])
  })

})
