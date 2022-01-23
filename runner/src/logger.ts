enum Action {
  Read = 'read',
  Write = 'write',
}
export { Action }

type strOrNum = string | number

function log(action: Action, addr: string, v: strOrNum) {
  return {
    action: `${action}`,
    addr,
    v: `${v}`
  }
}

export { log }

const logger = {
  write: (addr: string, v: strOrNum) => log(Action.Write, addr, v),
  read: (addr: string, v: strOrNum) => log(Action.Read, addr, v)
}

export default logger
