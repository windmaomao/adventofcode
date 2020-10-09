import '../../utils/js/string'
import '../../utils/js/array'
import '../../utils/js/number'

const extractEqn = str => {
  const vars = str.scan(/[a-z]+|\d+/g)
  const ops = str.scan(/[A-Z]+/g)
  const name = vars.pop()
  return { ops, vars, name }
}

const eqnMaps = eqns => {
  const maps = {}
  eqns.forEach(eqn => {
    maps[eqn.name] = eqn
  })
  return maps
}

const sortDeps = (maps, root) => {
  const processing = {}
  const visited = []

  function visit(node) {
    if (visited.indexOf(node) >= 0) return

    processing[node] = true

    const children = maps[node].vars
    for (const n of children) {
      if (!processing[n] && maps[n]) visit(n)
    }
    for (const n of children) {
      if (visited.indexOf(n) < 0) visited.push(n)
    }
  }

  visit(root)
  visited.push(root)
  return visited
}

const expr = (vals, eqn) => {
  const { ops, vars, nums } = eqn
  const vs = vars.map(v => vals[v] || parseInt(v))
  const res = (op) => {
    switch(op) {
      case 'AND': return vs[0] & vs[1]
      case 'OR': return vs[0] | vs[1]
      case 'LSHIFT': return vs[0] << vs[1]
      case 'RSHIFT': return vs[0] >> vs[1]
      case 'NOT': return ~vs[0]
      default: return vs[0]
    }
  }
  const opm = ops.length ? ops[0] : ''
  return {
    ...vals,
    [eqn.name]: res(opm).mod(65536)
  }
}

const part1 = (maps, deps) => deps
  // .filter(d => !!maps[d])
  .compact(d => maps[d])
  .reduce(expr, {})
  ['a']

const part2 = (maps, deps, b) => {
  maps['b'].vars[0] = `${b}`
  return part1(maps, deps)
}

export { extractEqn, eqnMaps, sortDeps, expr, part1, part2 }
