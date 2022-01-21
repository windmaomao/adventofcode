enum AlgoAction {
  Init = '',
  Get = 'get',
  Set = 'set',
  Enter = 'enter',  
  Leave = 'leave'
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
const logArrSet = (arr: string, index: number, v: string | number) =>
  log(AlgoAction.Set, `${arr}.${index}`, v)
const logArrGet = (arr: string, index: number, v: string | number) =>
  log(AlgoAction.Get, `${arr}.${index}`, v)
const logEnter = (fn: string, v: string | number) =>
  log(AlgoAction.Enter, fn, v)
const logLeave = (fn: string, v: string | number) =>
  log(AlgoAction.Leave, fn, v)

export {
  AlgoAction,
  log, logInit,
  logSet, logGet,
  logArrSet, logArrGet,
  logEnter, logLeave
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
