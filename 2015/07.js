const raw = [
  "123 -> x",
  "456 -> y",
  "x AND y -> d",
  "x OR y -> e",
  "x LSHIFT 2 -> f",
  "y RSHIFT 2 -> g",
  "NOT x -> h",
  "NOT y -> i",
]

const processData = l => {
  const ins = l.scan(/[a-z]+|\d+|[A-Z]+/g)
  const names = l.scan(/[a-z]+/g)
  const name = names.pop()
  return [name, names, ins.remove(name)]
}

const prepare = data => raw.map(processData)
const part1 = data => data
const part2 = data => 0
const finish = data => data

export default () => ({ prepare, part1, part2, finish })