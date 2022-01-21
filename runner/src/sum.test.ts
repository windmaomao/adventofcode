import Algo, { logSet, logGet } from './algo'

class SumAlgo extends Algo {
  #arr: number[] = []

  parse(inputs: string[]) {
    const line = inputs[0]
    if (!line) {
      this.#arr = []
    } else {
      this.#arr = line
        .split(this.delimiter)
        .map(s => Number(s))
    }
  }

  *generate() {
    yield* super.generate()

    const arr = this.#arr
    yield logSet('arr', `${arr}`)

    let sum = 0, v
    yield logSet('sum', 0)

    for (let i = 0; i < arr.length; i++) {
      yield logSet('i', i)

      v = arr[i]
      yield logGet(`arr.${i}`, v)

      sum += v
      yield logSet('sum', sum)
    }
  }
}

const debug = (line: string): string => {
  return (new SumAlgo()).debug([line]).join('\n')
}

describe('Sum Algo', () => {
  it('should add no number', () => {
    expect(debug('')).toBe(['',
      logSet('arr', ''),
      logSet('sum', 0)
    ].join('\n'))
  })

  it('should add one number', () => {
    expect(debug('1')).toBe(['',
      logSet('arr', '1'),
      logSet('sum', 0),
      logSet('i', 0),
      logGet('arr.0', 1),
      logSet('sum', 1)
    ].join('\n'))
  })

  it('should add two numbers', () => {
    expect(debug('1,2')).toBe(['',
      logSet('arr', '1,2'),
      logSet('sum', 0),
      logSet('i', 0),
      logGet('arr.0', 1),
      logSet('sum', 1),
      logSet('i', 1),
      logGet('arr.1', 2),
      logSet('sum', 3)
    ].join('\n'))
  })
})
