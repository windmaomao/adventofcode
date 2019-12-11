const MIN = -100000
const MAX = 1000000

const _init = () => ({ min: MAX, max: MIN })

function plot(arr, FILL = '*', BLANK = ' ') {
  const bound = arr.reduce((acc, p) => {
    if (p.x < acc.x.min) acc.x.min = p.x
    if (p.y < acc.y.min) acc.y.min = p.y
    if (p.x > acc.x.max) acc.x.max = p.x
    if (p.y > acc.y.max) acc.y.max = p.y
    return acc
  }, { x: _init(), y: _init() })

  const dx = -bound.x.min, dy = -bound.y.min
  const xc = bound.x.max - bound.x.min + 1
  const yc = bound.y.max - bound.y.min + 1

  const pic = new Array(yc).fill(BLANK).map(_ => (
    new Array(xc).fill(BLANK)
  ))

  arr.forEach(p => {
    const x = p.x + dx, y = p.y + dy
    pic[y][x] = FILL
  })

  const drawing = pic.reverse().map(row => row.join('')).join('\n')

  return { pic, bound, drawing }
}

module.exports = plot

// const arrs = [
//   { x: 3, y: 3 }, 
//   { x: 1, y: 5 },
//   { x: -2, y: 4 },
//   { x: -10, y: 10}
// ]
// const pic = plot(arrs)
// console.log(pic.drawing)