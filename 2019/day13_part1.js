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

board = play(raw, board)
const picture = pos.map(row => row.join('')).join('\n')
debug(picture)