import permute, { PermuteState } from './permute'

describe('permute', () => {

  it('PermuteState', () => {
    expect(PermuteState([1]).getHashmap()).toEqual({ '1': true })
    expect(PermuteState([1], [1,2]).possibleNexts()).toEqual([2])
    expect(PermuteState([1,2]).getArr()).toEqual([1,2])
  })

  it('one element', () => {
    expect(permute([1])).toEqual([[1]])
  })

  it('two element', () => {
    expect(permute([1,2])).toEqual([[1,2], [2,1]])
  })

  it('three element', () => {
    expect(permute([1,2,3])).toEqual([
      [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]
    ])
  })

  it('four elements', () => {
    expect(permute([1,2,3,4]).length).toEqual(24)
  })

  it('five elements', () => {
    expect(permute([1,2,3,4,5]).length).toEqual(120)
  })

  it('support string', () => {
    expect(permute(['a', 'b', 'c']).length).toEqual(6)
  })

  it('support uniq string', () => {
    expect(permute(['a', 'c1', 'c2']).length).toEqual(6)
  })

})
