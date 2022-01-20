class Algo {
  run(inputs: string[]): string {
    if (inputs.length == 0) {
      throw 'empty'
    }
    return ''
  }
}

let delimiter = /[,]/
let parse = Number

class SumAlgo extends Algo {
  #arr: number[] = []
  #res: number

  parse(inputs: string[]) {
    this.#arr = inputs[0]
      .split(delimiter)
      .map(s => parse(s))
   }

  execute() {
    this.#res = this.#arr.reduce((acc, v) => acc + v)
  }

  print(): string {
    return `${this.#res}`
  }

  run(inputs: string[]): string {
    super.run(inputs)
    this.parse(inputs)
    this.execute()
    return this.print()
  }

  *generate() {
    this.#res = 0
    yield this.print()
    for (let v of this.#arr) {
      this.#res += v
      yield this.print()
    }
  }
}

const sum = (line: string): string => {
  const al = new SumAlgo()
  return al.run([line])
}

const debug = (line: string): string => {
  const al = new SumAlgo()
  al.parse([line])
  const res = []
  for (let o of al.generate()) {
    res.push(o)
  }
  return res.join('\n')
}

describe('Sum Algo', () => {
  describe('run', () => {
    it('should throw when empty', () => {
      const al = new SumAlgo()
      const fn = () => { al.run([]) }
      expect(fn).toThrow('empty')
    })
    
    it('should add one number', () => {
      expect(sum('1')).toBe('1')
    })
  
    it('should add two numbers', () => {
      expect(sum('1,2')).toBe('3')
    })
  
    it('should take negative numbers', () => {
      expect(sum('1,-2')).toBe('-1')
    })
  
    it('should take float numbers', () => {
      expect(sum('1.0,2')).toBe('3')
    })
  })
  
  describe('debug', () => {
    it('should add one number', () => {
      expect(debug('1')).toBe('0\n1')
    })

    it('should add two numbers', () => {
      expect(debug('1,2')).toBe('0\n1\n3')
    })
  
  })

})
