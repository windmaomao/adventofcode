const dirs = { 
  'o': [0, 0],
  '^': [0, 1], 'v': [0, -1], 
  '<': [-1, 0], '>': [1, 0],
}
const posKey = p => `${p[0]}x${p[1]}`
const updatePos = (acc, s) => {
  const { o, cache } = acc
  const dir = dirs[s]
  const o2 = o.map((_, i) => o[i] + dir[i])
  const key = posKey(o2)
  cache[key] = cache[key] || 0
  cache[key]++
  return { o: o2, cache }
}

const more = x => x > 0
const part1 = (data) => { 
  const o = [0, 0], cache= {}
  const res = ['o', ...data].reduce(updatePos, { o, cache })
  return Object.values(res.cache).filter(more).length
}
const part2 = data => 0

export default () => ({ separator: '', part1, part2 })