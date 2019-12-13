const filereader = require('./utils/filereader')
const raw = filereader.readFile('day13.data', ',', true)
const play = require('./day13_play')
const debug = require('debug')('day13:')

const initBoard = () => {
  const pos = new Array(21).fill(0).map(row => new Array(44).fill(' '))
  return {
    once: true, print: false,
    output: 0, i: 0, relative: 0, score: 0, done: false,
    pos, bar: { x: 0, y: 0 }, ball: { x: 0, y: 0 }
  }
}

const plotBoard = (board) => {
  const picture = board.pos.map(row => row.join('')).join('\n')
  debug(picture)  
}

const countBoard = (board, symbol) => {
  let count = 0
  board.pos.forEach(row => {
    row.forEach(dot => {
      if (dot == symbol) count++
    })
  })
  return count
} 

const raw1 = [...raw]
const runBoard = (data) => {
  let board = initBoard()
  board = play(data, board)
  return board
}

const b = runBoard(raw1)
debug('Day 13/1', countBoard(b, 'B')) 

const raw2 = [...raw]; raw2[0] = 2
const runBoard2 = (data) => {
  let board = initBoard()
  const moves = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 1
  ]

  moves.forEach(m => {
    board = play(data, board)
    board.output = m
  })

  return board
}

const b2 = runBoard2(raw2)
plotBoard(b2)
debug('Day 13/2a - Score', b2.score)

const raw2b = [...raw]; raw2b[0] = 2
const runBoard2b = (data) => {
  let board = initBoard()

  do {
    board = play(data, board)
    board.output = Math.sign(board.ball.x - board.bar.x)
  } while (countBoard(board, 'B') > 0)

  return board
}

const b2b = runBoard2b(raw2b)
debug('Day 13/2b - Score', b2b.score)


