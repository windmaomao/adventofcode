import '../../utils/js/array'

const possible = arr => {
  const m = arr.max()
  return arr.sum() - m > m
}

const totoalPossible = arr => arr
  .map(possible)
  .count(true)

const part1 = listOfArr => listOfArr
  .apply(totoalPossible)

// A)
// const part2 = listOfArr => listOfArr
//   .chunk(3) // [[1,2,3], [1,2,3], [1,2,3]]
//   .flatMap(a => [].range(3).map(i => []
//     .range(3).map(j => a[j][i]
//   )))
// B)
const part2 = listOfArr => listOfArr
  .flatMap(v => v)
  .chunkMod(3)  // vertical strip
  .flatMap(arr => arr.chunk(3))
  .apply(totoalPossible)

export { possible, part1, part2 }