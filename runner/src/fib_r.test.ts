import Algo, 
  { logSet, logGet, logArrSet, logArrGet, logEnter, logLeave } 
from './algo'

class FibRecAlgo extends Algo {
  #n: number

  parse(inputs: string[]) {
    this.#n = Number(inputs[0])
  }

  *generate() {
    yield* super.generate()

    const n = this.#n
    if (n < 1) return

    const m = new Array(n+1).fill(0)
    yield logSet('m', `${m}`)

    if (n >= 1) {
      m[1] = 1
      yield logArrSet('m', 1, 1)
    }

    if (n >= 2) {
      m[2] = 1
      yield `set m.2 1`
    }

    function* fib(i: number): any {
      yield logEnter('fib', i)
      yield logSet('i', i)

      if (i < 3) { yield logLeave('fib', i); return }
      if (m[i]) { yield logLeave('fib', i); return }

      let p,  q
      if (i >= 2) yield* fib(i - 2)
      p = m[i - 2]
      yield logArrGet('m', i - 2, m[i - 2])

      if (i >= 1) yield* fib(i - 1)
      q = m[i - 1]
      yield logArrGet('m', i - 1, m[i - 1])

      m[i] = m[i - 2] + m[i - 1]
      yield logArrSet('m', i, m[i])

      yield logLeave('fib', i)
    }

    if (n >= 3) yield* fib(n)
  }
}

const debug = (line: string): string => new FibRecAlgo()
  .debug([line]).join('\n')

describe('Fib Recursion Algo', () => {
  it.only('should gen no number', () => {
    expect(debug('0')).toBe(['',
    ].join('\n'))
  })

  it.only('should gen one number', () => {
    expect(debug('1')).toBe(['',
      logSet('m', '0,0'),
      logArrSet('m', 1, 1)
    ].join('\n'))
  })

  it.only('should gen two numbers', () => {
    expect(debug('2')).toBe(['',
      logSet('m', '0,0,0'),
      logArrSet('m', 1, 1),
      logArrSet('m', 2, 1)
    ].join('\n'))
  })

  it.only('should gen three numbers', () => {
    expect(debug('3')).toBe(['',
      logSet('m', '0,0,0,0'),
      logArrSet('m', 1, 1),
      logArrSet('m', 2, 1),
      logEnter('fib', 3),
      logSet('i', 3),
      logEnter('fib', 1),
      logSet('i', 1),
      logLeave('fib', 1),
      logArrGet('m', 1, 1),
      logEnter('fib', 2),
      logSet('i', 2),
      logLeave('fib', 2),
      logArrGet('m', 2, 1),
      logArrSet('m', 3, 2),
      logLeave('fib', 3)
    ].join('\n'))
  })

})


