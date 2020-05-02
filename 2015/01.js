const floor = s => s === '(' ? 1 : -1
const sum2Basement = (acc, s, i) => {
  const prev = i > 0 ? acc[i - 1] : 0
  if (prev === -1) return false
  acc.push(prev + floor(s))
  return acc
}

const part1 = data => data.sum(floor)
const part2 = data => data.transform(sum2Basement, []).length

export default () => ({ 
  separator: '',
  part1, part2 
})