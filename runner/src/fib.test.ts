class Algo {
  run(inputs: string[]): string {
    if (inputs.length == 0) {
      throw 'empty'
    }
    return ''
  }
}

let parse = Number

class FibAlgo extends Algo {
  #n: number
  #fibs: number[]

  parse(inputs: string[]) {
    this.#n = parse(inputs[0])
  }

  execute() {
    const res = [], n = this.#n
    if (n > 0) { res.push(1) }
    if (n > 1) { res.push(1) }
    if (n > 2) {
      for (let i = 2; i < n; i++) {
        res.push(res[i - 2] + res[i - 1])
      }
    }
    this.#fibs = res
  }

  print(): string {
    return `${this.#fibs}`
  }

  run(inputs: string[]): string {
    super.run(inputs)
    this.parse(inputs)
    this.execute()
    return this.print()
  }

}

const fib = (line: string): string => {
  const al = new FibAlgo()
  return al.run([line])
}

describe('Fib Algo', () => {
  describe('run', () => {
    it('should gen no number', () => {
      expect(fib('0')).toBe('')
    })

    it('should gen 1 number', () => {
      expect(fib('1')).toBe('1')
    })

    it('should gen 2 numbers', () => {
      expect(fib('2')).toBe('1,1')
    })

    it('should gen 3 numbers', () => {
      expect(fib('3')).toBe('1,1,2')
    })
   
    it('should gen 4 numbers', () => {
      expect(fib('4')).toBe('1,1,2,3')
    })
   
    it('should gen 5 numbers', () => {
      expect(fib('5')).toBe('1,1,2,3,5')
    })
})
  
})

