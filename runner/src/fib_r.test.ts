import Algo from './algo'

class FibRecAlgo extends Algo {
  #n: number

  parse(inputs: string[]) {
    this.#n = Number(inputs[0])
  }

  *generate() {
    const n = this.#n
    if (n < 1) return

    const m = new Array(n+1).fill(0)
    yield `set m {}`

    if (n > 0) {
      m[1] = 1
      yield `set m.1 1`
    }

    if (n > 1) {
      m[2] = 1
      yield `set m.2 1`
    }

    function* fib(i: number): any {
      // yield `call fib ${i}`
      if (i < 3) return
      if (m[i]) return

      let p,  q
      if (i >= 2) yield* fib(i - 2)
      p = m[i - 2]
      yield `get m.${i - 2} ${m[i - 2]}`

      if (i >= 1) yield* fib(i - 1)
      q = m[i - 1]
      yield `get m.${i - 1} ${m[i - 1]}`

      m[i] = m[i - 2] + m[i - 1]
      yield `set m.${i} ${m[i]}`
    }

    yield* fib(n)
  }
}

const debug = (line: string): string => new FibRecAlgo()
  .debug([line]).join('\n')

describe('Fib Recursion Algo', () => {
  it('should gen no number', () => {
    expect(debug('0')).toBe('')
  })

  it('should gen one number', () => {
    expect(debug('1')).toBe(`set m {}
set m.1 1`)
  })

  it('should gen two numbers', () => {
    expect(debug('2')).toBe(`set m {}
set m.1 1
set m.2 1`)
  })

  it('should gen three numbers', () => {
    expect(debug('3')).toBe(`set m {}
set m.1 1
set m.2 1
get m.1 1
get m.2 1
set m.3 2`)
  })
  
  it.skip('should gen four numbers', () => {
    console.log(debug('4'))
    expect(debug('4')).toBe(`set m {}
set m.1 1
set m.2 1
get m.1 1
get m.2 1
set m.3 2
get m.2 1
get m.3 2
set m.4 3`)
  })

})


