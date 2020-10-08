import '../../utils/js/string'
import '../../utils/js/array'
import '../../utils/js/number'

const extractEqn = str => {
  const vars = str.scan(/[a-z]+/g)
  const nums = str.extractNumbers()
  const ops = str.scan(/[A-Z]+/g)
  const name = vars.pop()
  return { ops, vars, nums, name }
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

const expr = (eqn, vals) => {
  const { ops, vars, nums } = eqn
  const vs = vars.map(v => vals[v])
  const res = (op) => {
    switch(op) {
      case 'AND': return vs[0] & vs[1]
      case 'OR': return vs[0] | vs[1]
      case 'LSHIFT': return vs[0] << nums[0]
      case 'RSHIFT': return vs[0] >> nums[0]
      case 'NOT': return ~vs[0]
    }
  }
  if (ops.length) return res(ops[0]).mod(65536)
  if (nums.length) return nums[0]
  return vs[0]
}

const calcEqns = (maps, deps) => {
  const vals = {}
  deps.forEach(node => {
    const eqn = maps[node]
    vals[eqn.name] = expr(eqn, vals)
  })
  return vals
}

const part1 = (maps, deps) => calcEqns(maps, deps)

export { extractEqn, eqnMaps, sortDeps, expr, part1 }
