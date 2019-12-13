const filereader = require('./utils/filereader')
const raw = filereader.readFile('day13.data', ',', true)
const play = require('./day13_play')
const debug = require('debug')('day13:')

const plotBoard = (board) => {
  const picture = board.pos.map(row => row.join('')).join('\n')
  debug(picture)  
}

const runBoard = (data) => {
  const pos = new Array(21).fill(0).map(row => new Array(44).fill(' '))
  let board = {
    once: true, print: false,
    output: 0, i: 0, relative: 0, score: 0, done: false,
    pos, bar: { x: 0, y: 0 }, ball: { x: 0, y: 0 }, auto: false
  }
  board = play(data, board)
  plotBoard(board)
}

debug('Day 13/1')
runBoard([...raw])

const raw2 = [...raw]
raw2[0] = 2

const runBoard2 = (data) => {
  const pos = new Array(21).fill(0).map(row => new Array(44).fill(' '))
  let board = {
    once: true, print: false,
    output: 0, i: 0, relative: 0, score: 0, done: false,
    pos, bar: { x: 0, y: 0 }, ball: { x: 0, y: 0 }, auto: false
  }
  const moves = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 1
  ]

  moves.forEach(m => {
    board = play(data, board)
    board.output = m
  })
  plotBoard(board)
  debug('score:', board.score)
}

debug('Day 13/2')
runBoard2(raw2)



