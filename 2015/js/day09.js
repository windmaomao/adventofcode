import '../../utils/js/array'

const buildMap = strs => strs
  .map(s => {
    const p0 = s.split(" = ")
    const p1 = p0[0].split(" to ")
    return [p1[0], p1[1], parseInt(p0[1])]
  }).reduce((acc, a) => {
    const [from, to, cost] = a
    if (!acc[from]) acc[from] = {}
    acc[from][to] = cost
    if (!acc[to]) acc[to] = {}
    acc[to][from] = cost
    return acc
  }, {})

const mapUtil = locMap => {

  const calcDist = (d, pair) => {
    const [a, b] = pair

    const cs = locMap[a]
    if (!cs) return -1

    const w = cs[b]
    if (!w) return -1

    return d + w
  }

  const pathDist = path => path
    .windowed(2)  // [a, b] [b, c]
    .reduce(calcDist, 0)

  return { calcDist, pathDist }
}

const part = locMap => Object
  .keys(locMap)
  .permute()
  .map(mapUtil(locMap).pathDist)
  .filter(v => v > 0)

const part1 = locMap => part(locMap).min()
const part2 = locMap => part(locMap).max()

export { buildMap, mapUtil, part1, part2 }
