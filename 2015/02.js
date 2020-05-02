const paperSize = ([l, w, h]) => {
  const base = 2 * l * w + 2 * w * h + 2 * h * l
  const areas = [l*w, w*h, h*l]
  return base + Math.min(...areas)
}

const bowSize = ([l, w, h]) => {
  const base = l*w*h
  const edges = [l+w, w+h, h+l]
  return base + Math.min(...edges)*2
}

const parseBox = item => item.split('x').map(Number)
const part1 = data => data.map(parseBox).map(paperSize)
const part2 = data => data.map(parseBox).map(bowSize)
const finish = data => data.sum()

export default () => ({ part1, part2, finish })