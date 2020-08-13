const processData = (acc, l) => {
  const [a, to, b, eq, weight] = l.split(' ')
  const m = acc.map
  m[a] = m[a] || {}
  m[a][b] = weight
  return acc
}

const prepare = data => {
  const tmp = data.reduce(processData, {
    map: {}, weight: {}, graph: null
  })
  console.log(tmp)
  // tmp.graph = graph(tmp.map)
  return tmp
}
const part1 = data => 0
const part2 = data => 0
const finish = data => data

export default () => ({ prepare, part1, part2, finish })