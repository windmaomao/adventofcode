const strDiff = str => {
  const v = str.slice(1, -1)
  const mem = eval(`mem="${v}"`)
  return str.length - mem.length
}

const strDiff2 = str => {
  const v = str.slice(1, -1)
  const match = v.match(/("|\\)/g) || []
  return 4 + match.length
}

const prepare = data => data
const part1 = data => data.map(strDiff)
const part2 = data => data.map(strDiff2)
const finish = data => data.sum()

export default () => ({ prepare, part1, part2, finish })