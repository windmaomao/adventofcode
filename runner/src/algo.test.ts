import Algo, { logSet, logGet, logArrGet } from './algo'

class TestAlgo extends Algo {
  *generate() {
    yield logSet('i', 0)
  }
}

describe('Algo', () => {
  it('can generate', () => {
    const a = new TestAlgo()
    const g = a.generate().next()
    expect(g.value).toBe('set i 0')
  })
})
