const print = require('debug')('day2:')

const paperSize = (l, w, h) => {
  const base = 2 * l * w + 2 * w * h + 2 * h * l
  const areas = [l*w, w*h, h*l]
  return base + Math.min(...areas)
}

const bowSize = (l, w, h) => {
  const base = l*w*h
  const edges = [l+w, w+h, h+l]
  return base + Math.min(...edges)*2
}

function main(input) {
  print('part1: ', input.reduce((acc, dims) => {
    const [l, w, h] = dims.split('x').map(i => parseInt(i))
    return acc + paperSize(l, w, h)
  }, 0))


  print('part2: ', input.reduce((acc, dims) => {
    const [l, w, h] = dims.split('x').map(i => parseInt(i))
    return acc + bowSize(l, w, h)
  }, 0))

}

module.exports = main

// 4972554, too high