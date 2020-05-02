const expr = (eqn, vals) => {
  const filled = eqn.map(v => {
    switch (v) {
      case 'AND': return '&'
      case 'OR': return '|'
      case 'LSHIFT': return '<<'
      case 'RSHIFT': return '>>'
      case 'NOT': return '~'
      default:
        return Number.isNumber(v) ? parseInt(v) : vals[v]
    }
  })
  return eval(filled.join(' ')).mod(65536)
}

export default expr