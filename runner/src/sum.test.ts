import Algo from './algo'
import log from './logger'

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
    yield log.write('arr', `${arr}`)

    let sum = 0, v
    yield log.write('sum', 0)

    for (let i = 0; i < arr.length; i++) {
      yield log.write('i', i)

      v = arr[i]
      yield log.read(['arr', `${i}`].join('.'), v)

      sum += v
      yield log.write('sum', sum)
    }
  }
}

const debug = (line: string): string => {
  return (new SumAlgo()).debug([line]).join('\n')
}

describe('Sum Algo', () => {
  it.only('should add no number', () => {
    expect(debug('')).toBe(['',
      log.write('arr', ''),
      log.write('sum', 0)
    ].join('\n'))
  })

  it('should add one number', () => {
    expect(debug('1')).toBe(['',
      log.write('arr', '1'),
      log.write('sum', 0),
      log.write('i', 0),
      log.read('arr.0', 1),
      log.write('sum', 1)
    ].join('\n'))
  })

  it('should add two numbers', () => {
    expect(debug('1,2')).toBe(['',
      log.write('arr', '1,2'),
      log.write('sum', 0),
      log.write('i', 0),
      log.read('arr.0', 1),
      log.write('sum', 1),
      log.write('i', 1),
      log.read('arr.1', 2),
      log.write('sum', 3)
    ].join('\n'))
  })

  it('should add three numbers', () => {
    const inputs = '489,-5,200'
    expect(debug(inputs)).toBe(['',
      log.write('arr', inputs),
      log.write('sum', 0),
      log.write('i', 0),
      log.read('arr.0', 489),
      log.write('sum', 489),
      log.write('i', 1),
      log.read('arr.1', -5),
      log.write('sum', 489-5),
      log.write('i', 2),
      log.read('arr.2', 200),
      log.write('sum', 489-5+200)
    ].join('\n'))
  })
})
