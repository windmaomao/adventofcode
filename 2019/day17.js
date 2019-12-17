const filereader = require('./utils/filereader')
const raw = filereader.readFile('day17.data', ',', true)
const intcode = require('./day13_intcode')
const debug = require('debug')('day17:')

const initBoard = () => {
  return {
    once: true, print: false,
    output: 0, i: 0, relative: 0, score: 0, done: false,
    line: [], robot: { x: 0, y: 0 }
  }
}

const stepBoard = (data, board) => {
  let { done, once, print, output, i, relative, line } = board
  let j = 0

  while (!done) {
    let res
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; output = res.output; relative = res.relative
    if (output == 10) j++
    done = j == 39
    if (!done)
      line.push(String.fromCharCode(output))
  }
  return { once, print, output, i, relative, line }
}

const raw1 = [...raw]
const runBoard = (data) => {
  let board = initBoard()
  board = stepBoard(data, board)
  return board
}

const b = runBoard(raw1)
const picture = b.line.join('').split('\n')

debug(picture)
const ymax = picture.length, xmax = picture[0].length
debug(xmax, ymax)

const lineArr = picture.join('').split('')
const joints = lineArr.reduce((acc, char, index) => {
  if (char != '#') return acc
  const x = index % xmax, y = (index - x) / xmax
  if (x < 1) return acc
  if (x > xmax - 2) return acc
  if (y < 1) return acc
  if (y > ymax - 2) return acc
  
  if (lineArr[index - xmax] != '#') return acc
  if (lineArr[index + xmax] != '#') return acc
  if (lineArr[index - 1] != '#') return acc
  if (lineArr[index + 1] != '#') return acc

  acc.push({ y, x })
  debug(y, x)
  return acc
}, [])

debug(joints.length)

const params = joints.map(p => p.y * p.x)
debug(params)
const sum = params.reduce((acc, i) => acc + i, 0)
debug(sum)

// 5576 too high
// 4112