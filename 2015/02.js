const paperSize = box => {
  const [l, w, h] = box
  const base = 2 * l * w + 2 * w * h + 2 * h * l
  const areas = [l*w, w*h, h*l]
  return base + Math.min(...areas)
}

// const bowSize = (l, w, h) => {
//   const base = l*w*h
//   const edges = [l+w, w+h, h+l]
//   return base + Math.min(...edges)*2
// }

const parseBox = item => item.split('x').map(Number)
const sum = (acc, s) => acc + s
const part1 = data => data
  .map(parseBox)
  .map(paperSize)
  .reduce(sum, 0)

// input.reduce((acc, dims) => {
//   const [l, w, h] = dims.split('x').map(i => parseInt(i))
//   return acc + paperSize(l, w, h)
// }, 0)

const part2 = () => {}

// const part2 = input => input.reduce((acc, dims) => {
//   const [l, w, h] = dims.split('x').map(i => parseInt(i))
//   return acc + bowSize(l, w, h)
// }, 0)

export default () => ({ part1, part2 })