class Algo {
  delimiter = /[,]/
  parse(inputs: string[]): void {}
  *generate(): any {}
  debug(inputs: string[]): string[] {
    this.parse(inputs)
    const res = []
    for (let o of this.generate()) {
      res.push(o)
    }
    return res
  }
}

class FibAlgo extends Algo {
  #n: number

  parse(inputs: string[]) {
    this.#n = Number(inputs[0])
  }

  *generate() {
    const arr = [], n = this.#n
    if (n <= 0) return

    if (n > 0) { 
      arr.push(1) 
      yield `set arr.0 1`
    }
    if (n > 1) { 
      arr.push(1)
      yield `set arr.1 1`
    }
    if (n > 2) {
      for (let i = 2; i < n; i++) {
        let p = i - 2, q = i -1
        yield `get arr.${p} ${arr[p]}`
        yield `get arr.${q} ${arr[q]}`
        let v: number = arr[p] + arr[q]
        arr.push(v)
        yield `set arr.${i} ${v}`
      }
    }
  }
}

const debug = (line: string): string => new FibAlgo()
  .debug([line]).join('\n')

describe('Fib Algo', () => {
  it('should gen no number', () => {
    expect(debug('0')).toBe('')
  })

  it('should gen one number', () => {
    expect(debug('1')).toBe(`set arr.0 1`)
  })

  it('should gen two numbers', () => {
    expect(debug('2')).toBe(`set arr.0 1
set arr.1 1`)
  })

  it('should gen three numbers', () => {
    expect(debug('3')).toBe(`set arr.0 1
set arr.1 1
get arr.0 1
get arr.1 1
set arr.2 2`)
  })
  
  it('should gen four numbers', () => {
    expect(debug('4')).toBe(`set arr.0 1
set arr.1 1
get arr.0 1
get arr.1 1
set arr.2 2
get arr.1 1
get arr.2 2
set arr.3 3`)
  })

})

