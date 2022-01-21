enum AlgoAction {
  Init = '',
  Get = 'get',
  Set = 'set',
  Call = 'cal',  
}

function log(
  a: AlgoAction, 
  addr?: string, 
  v?: string | number
) {
  let s = `${a}`
  if (addr) s += ` ${addr}`
  if (v != undefined) s += ` ${v}`
  return s
}
const logInit = () => log(AlgoAction.Init)
const logSet = (addr: string, v: string | number) =>
  log(AlgoAction.Set, addr, v)
const logGet = (addr: string, v: string | number) =>
  log(AlgoAction.Get, addr, v)

export {
  AlgoAction,
  log, logInit, logSet, logGet
}

class Algo {
  delimiter = /[,]/
  parse(inputs: string[]): void {}
  *generate(): any { yield logInit() }
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
