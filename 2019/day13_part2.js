const filereader = require('./utils/filereader')
const raw = filereader.readFile('day13.data', ',', true)
const play = require('./day13_play')
const debug = require('debug')('day13:')

const pos = new Array(21).fill(0).map(row => new Array(44).fill(' '))
let board = {
  once: true, print: false,
  output: 0, i: 0, relative: 0, score: 0, done: false,
  pos, bar: { x: 0, y: 0 }, ball: { x: 0, y: 0 }, auto: false
}
raw[0] = 2

const z = (n,v) => new Array(n).fill(v)
const moves = [0, 
  ...z(2, -1), 
  ...z(6, 0), // 8 
  ...z(4, 0), // 85, 77
  ...z(12, -1), 
  ...z(1, 0), // 158, 73
  ...z(12, -1),
  ...z(1, 0), // 228, 70,
  ...z(12, -1),
  ...z(25, 0), // 309, 81
  ...z(17, 1),
  ...z(4, 0)
]

let scores = [], prev = 0
moves.forEach((m, i) => {
  board.output = m
  board = play(raw, board)
  if (board.score > prev) {
    prev = board.score
    scores.push(prev)
  }
})

const picture = pos.map(row => row.join('')).join('\n')
debug(picture)
debug('score', scores)


