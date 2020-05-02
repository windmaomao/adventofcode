import { graph, expr } from './utils'

const processData = (acc, l) => {
  const ins = l.scan(/[a-z]+|\d+|[A-Z]+/g)
  const names = l.scan(/[a-z]+/g)
  const name = names.pop()
  acc.map[name] = names
  acc.eqn[name] = ins.remove(name)
  return acc
}

const prepare = data => {
  const tmp = data.reduce(processData, { 
    map: {}, eqn: {}, val: {},
    graph: null
  })
  tmp.graph = graph(tmp.map)
  return tmp
}
const solve = data => data.graph
  .tsort()
  .reduce((acc, d) => {
    acc.val[d] = expr(acc.eqn[d], acc.val)
    return acc
  }, data)
const part1 = solve
const part2 = data => {
  data.eqn.b[0] = `${data.val.a}`
  return solve(data)
}
const finish = obj => obj.val.a

export default () => ({ prepare, part1, part2, finish })