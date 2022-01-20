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
  run(inputs: string[]): string {
    super.run(inputs)
    const nums = inputs[0]
      .split(delimiter)
      .map(s => parse(s))
    const res = nums.reduce((acc, v) => acc + v)
    return `${res}`
  }
}

const sum = (line: string): string => {
  const al = new SumAlgo()
  return al.run([line])
}

describe('Sum Algo', () => {

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
