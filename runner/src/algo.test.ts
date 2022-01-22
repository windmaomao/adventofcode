import Algo, { AlgoObjLogger } from './algo'

class TestAlgo extends Algo {
  *generate() {
    yield this.logger.write('i', 0)
  }
}

describe('Algo', () => {
  it('can log', () => {
    const a = new TestAlgo()
    const g = a.generate().next()
    expect(g.value).toBe('set i 0')
  })
  it('can log to obj', () => {
    const a = new TestAlgo()
    const logger = new AlgoObjLogger()
    a.setLogger(logger)
    const g = a.generate().next()
    expect(logger.obj.i).toBe("0")
  })
})
