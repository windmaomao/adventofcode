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

const _state = (path, weight) => ({ path, weight })
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
  const states = cities.map(v => _state([v], 0))

  while (states.length) {
    const state = states.pop()

    const lastCity = state.path.last()
    const nbs = locMap[lastCity]
    if (nbs) {
      Object.keys(nbs).forEach(city => {
        let cityAllowed = state.path.indexOf(city) < 0
        const weight = getWeight(lastCity, city)

        if (cityAllowed && (weight > 0)) {
          const nextState = {
            path: [...state.path, city],
            weight: state.weight + weight
          }

          if (nextState.path.length < cities.length) {
            states.push(nextState)
          } else {
            permutes.push(nextState)
          }
        }
      })
    }
  }

  return permutes.map(p => p.weight)
}

const part1 = locMap => permuteCities(locMap).min()
const part2 = locMap => permuteCities(locMap).max()

export { buildMap, permuteCities, part1, part2 }
