import Algo,
  { logSet, logGet, logArrSet, logArrGet }
from './algo'

class FibAlgo extends Algo {
  #n: number

  parse(inputs: string[]) {
    this.#n = Number(inputs[0])
  }

  *generate() {
    yield* super.generate()

    const n = this.#n
    if (n <= 0) return

    const arr: number[] = new Array(n+1).fill(0)
    yield logSet('arr', `${arr}`)

    if (n >= 1) {
      arr[1] = 1
      yield logArrSet('arr', 1, 1)
    }

    if (n >= 2) { 
      arr[2] = 1 
      yield logArrSet('arr', 2, 1)
    }

    if (n >= 3) {
      for (let i = 3; i <= n; i++) {
        yield logSet('i', i)

        let p = i - 2, q = i -1
        yield logArrGet('arr', p, arr[p])
        yield logArrGet('arr', q, arr[q])

        let v: number = arr[p] + arr[q]
        arr[i] = v
        yield logArrSet('arr', i, arr[i])
      }
    }
  }
}

const debug = (line: string): string => new FibAlgo()
  .debug([line]).join('\n')

describe('Fib Algo', () => {
  it('should gen no number', () => {
    expect(debug('0')).toBe(['',
    ].join('\n'))
  })

  it('should gen one number', () => {
    expect(debug('1')).toBe(['',
      logSet('arr', '0,0'),
      logSet('arr.1', 1),
    ].join('\n'))
  })

  it('should gen two numbers', () => {
    expect(debug('2')).toBe(['',
      logSet('arr', '0,0,0'),
      logSet('arr.1', 1),
      logSet('arr.2', 1),
    ].join('\n'))
  })

  it('should gen three numbers', () => {
    expect(debug('3')).toBe(['',
      logSet('arr', '0,0,0,0'),
      logSet('arr.1', 1),
      logSet('arr.2', 1),
      logSet('i', 3),
      logGet('arr.1', 1),
      logGet('arr.2', 1),
      logSet('arr.3', 2),
    ].join('\n'))
  })

  it('should gen four numbers', () => {
    expect(debug('4')).toBe(['',
      logSet('arr', '0,0,0,0,0'),
      logSet('arr.1', 1),
      logSet('arr.2', 1),
      logSet('i', 3),
      logGet('arr.1', 1),
      logGet('arr.2', 1),
      logSet('arr.3', 2),
      logSet('i', 4),
      logGet('arr.2', 1),
      logGet('arr.3', 2),
      logSet('arr.4', 3)
    ].join('\n'))
  })

})

