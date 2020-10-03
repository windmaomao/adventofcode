import '../../utils/js/array'

const paperSize = ([l, w, h]) => {
  const base = 2 * l * w + 2 * w * h + 2 * h * l
  const areas = [l*w, w*h, h*l]
  return base + areas.min()
}

const bowSize = ([l, w, h]) => {
  const base = l*w*h
  const edges = [l+w, w+h, h+l]
  return base + edges.min()*2
}

const part = fn => boxes => boxes.map(fn).sum()
const part1 = boxes => boxes.apply(part(paperSize))
const part2 = boxes => boxes.apply(part(bowSize))

export { paperSize, bowSize, part1, part2 }
