import './array'

const possible = arr => {
  const m = arr.max()
  return arr.sum() - m > m
}

const part1 = listOfArr => listOfArr
  .map(possible)
  .count(true)

const part2 = listOfArr => listOfArr
  .chunk(3) // [[1,2,3], [1,2,3], [1,2,3]]
  .flatMap(a => ([
    [a[0][0], a[1][0], a[2][0]],
    [a[0][1], a[1][1], a[2][1]],
    [a[0][2], a[1][2], a[2][2]],
  ]))
  .map(possible)
  .count(true)

export { possible, part1, part2 }