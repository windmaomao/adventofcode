const d = s => s === '(' ? 1 : -1
const sumFloor = (acc, s) => acc + d(s)
const sum2Basement = (acc, s, i) => {
  if (acc.value === -1) return acc
  return { 
    pos: i + 1,
    value: acc.value + d(s) 
  }
}

const part1 = data => data
  .reduce(sumFloor, 0)

const part2 = data => data
  .reduce(
    sum2Basement, 
    { value: 0, pos: 0 }
  ).pos

export default () => ({ part1, part2 })