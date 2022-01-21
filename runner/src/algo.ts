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

export default Algo
