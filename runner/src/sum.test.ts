import Algo from './algo'

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
    let res = 0, v
    yield 'set out 0'
    const arr = this.#arr
    for (let i = 0; i < arr.length; i++) {
      v = arr[i]
      yield `get in.${i} ${v}`
      res += v
      yield `set out ${res}`
    }
  }
}

const debug = (line: string): string => {
  return (new SumAlgo()).debug([line]).join('\n')
}

describe('Sum Algo', () => {
  it('should add no number', () => {
    expect(debug('')).toBe(`set out 0`)
  })

  it('should add one number', () => {
    expect(debug('1')).toBe(`set out 0
get in.0 1
set out 1`)
  })

  it('should add two numbers', () => {
    expect(debug('1,2')).toBe(`set out 0
get in.0 1
set out 1
get in.1 2
set out 3`)
  })

})
