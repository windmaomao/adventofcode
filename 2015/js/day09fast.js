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

const permuteCities = locMap => {

  const getWeight = (a, b) => {
    const cs = locMap[a]
    if (!cs) return -1

    const w = cs[b]
    if (!w) return -1

    return w
  }

  const cities = Object.keys(locMap)
  const permutes = []
  const paths = cities.map(v => [v])

  while (paths.length) {
    const curPath = paths.pop()

    const lastCity = curPath[curPath.length - 1]
    const nbs = locMap[lastCity]
    if (nbs) {
      Object.keys(nbs).forEach(city => {
        let cityAllowed = curPath.indexOf(city) < 0
        const weight = getWeight(lastCity, city)

        if (cityAllowed && (weight > 0)) {
          const nextPath = [...curPath, city]
          if (nextPath.length < cities.length) {
            paths.push(nextPath)
          } else {
            permutes.push(nextPath)
          }
        }
      })
    }
  }

  return permutes
}

export { buildMap, permuteCities }
