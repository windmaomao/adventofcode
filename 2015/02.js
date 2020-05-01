const paperSize = box => {
  const [l, w, h] = box
  const base = 2 * l * w + 2 * w * h + 2 * h * l
  const areas = [l*w, w*h, h*l]
  return base + Math.min(...areas)
}

const bowSize = box => {
  const [l, w, h] = box
  const base = l*w*h
  const edges = [l+w, w+h, h+l]
  return base + Math.min(...edges)*2
}

const parseBox = item => item.split('x').map(Number)
const part1 = data => data
  .map(parseBox)
  .map(paperSize)
  .sum()

const part2 = data => data
  .map(parseBox)
  .map(bowSize)
  .sum()

export default () => ({ part1, part2 })