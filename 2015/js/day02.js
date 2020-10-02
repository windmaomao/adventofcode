import './array'

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

const part = (boxes, fn) => boxes
  .map(fn)
  .sum()
const part1 = boxes => part(boxes, paperSize)
const part2 = boxes => part(boxes, bowSize)

export { paperSize, bowSize, part1, part2 }
