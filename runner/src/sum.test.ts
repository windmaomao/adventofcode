import Algo, { logSet, logGet, logArrGet } from './algo'

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
    const log = this.logger

    const arr = this.#arr
    yield log.set('arr', `${arr}`)

    let sum = 0, v
    yield log.set('sum', 0)

    for (let i = 0; i < arr.length; i++) {
      yield log.set('i', i)

      v = arr[i]
      yield logArrGet('arr', i, v)

      sum += v
      yield log.set('sum', sum)
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
      logArrGet('arr', 0, 1),
      logSet('sum', 1)
    ].join('\n'))
  })

  it('should add two numbers', () => {
    expect(debug('1,2')).toBe(['',
      logSet('arr', '1,2'),
      logSet('sum', 0),
      logSet('i', 0),
      logArrGet('arr', 0, 1),
      logSet('sum', 1),
      logSet('i', 1),
      logArrGet('arr', 1, 2),
      logSet('sum', 3)
    ].join('\n'))
  })

  it('should add three numbers', () => {
    const inputs = '489,-5,200'
    expect(debug(inputs)).toBe(['',
      logSet('arr', inputs),
      logSet('sum', 0),
      logSet('i', 0),
      logGet('arr.0', 489),
      logSet('sum', 489),
      logSet('i', 1),
      logGet('arr.1', -5),
      logSet('sum', 489-5),
      logSet('i', 2),
      logGet('arr.2', 200),
      logSet('sum', 489-5+200)
    ].join('\n'))
  })
})
