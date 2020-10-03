import './array'

const possible = arr => {
  const m = arr.max()
  return arr.sum() - m > m
}

const part1 = listOfArr => listOfArr
  .map(possible)
  .count(true)

export { possible, part1 }