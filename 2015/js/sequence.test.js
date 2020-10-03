import './sequence'

describe('sequence', () => {

  it('generateSequence', () => {
    const seq = [].generateSequence(v => v, 3)
    expect(seq.length()).toEqual(3)
    expect(seq.toArray()).toEqual([0, 1, 2])
  })

  it('asSequence', () => {
    const seq = [0, 1, 2].asSequence()
    expect(seq.length()).toEqual(3)
    expect(seq.toArray()).toEqual([0, 1, 2])
  })

})