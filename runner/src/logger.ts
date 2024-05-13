enum Action {
  Read = 'read',
  Write = 'write',
}
export { Action }

type strOrNum = string | number
type Log = {
  action: string,
  addr: string,
  val: string
}

function log(
  action: Action, addr: string, val: strOrNum
): Log {
  return {
    action: `${action}`,
    addr,
    val: `${val}`
  }
}

export { log, Log }

const logger = {
  write: (addr: string, v: strOrNum) => log(Action.Write, addr, v),
  read: (addr: string, v: strOrNum) => log(Action.Read, addr, v)
}

export default logger
