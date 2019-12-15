const filereader = require('./utils/filereader')
const raw = filereader.readFile('day15.data', ',', true)
const intcode = require('./day13_intcode')
const debug = require('debug')('day15:')

const initBoard = () => {
  const pos = new Array(50).fill(0).map(row => new Array(44).fill(' '))
  const p = { x: 35, y: 25 }
  pos[p.y][p.x] = 'o'
  return {
    once: true, print: false,
    output: 0, i: 0, relative: 0, score: 0, done: false,
    pos, p
  }
}

const plotBoard = (board) => {
  const p = board.next
  const saved = board.pos[p.y][p.x]
  board.pos[p.y][p.x] = 'x'
  const picture = board.pos.map(row => row.join('')).join('\n')
  debug(picture)
  board.pos[p.y][p.x] = saved
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

const stepBoard = (data, board) => {
  let { once, print, output, i, relative, pos, next } = board
  const res = intcode(data, { once, print, output, i, relative })
  const symbols = ['#', '.', 'D']
  pos[next.y][next.x] = symbols[res.output]
  return { ...res, pos, next }
}


const commandPos = (p, c) => {
  if (c === 1) return { x: p.x, y: p.y - 1 }
  if (c === 2) return { x: p.x, y: p.y + 1 }
  if (c === 3) return { x: p.x - 1, y: p.y }
  if (c === 4) return { x: p.x + 1, y: p.y }
}

const commands = { 'n': 1, 's': 2, 'w': 3, 'e': 4 }
const dirs = { 'e': 'n', 'n': 'w', 'w': 's', 's': 'e' }
const runBoard = (data) => {
  let board = initBoard(), count = 0, p = { x: 35, y: 25 }, dir = 's'
  while (count < 100) {
    const command = commands[dir]
    board.next = commandPos(p, command); 
    board.output = command
    board = stepBoard(data, board)
    const status = board.output
    if (status) {
      p.x = board.next.x; p.y = board.next.y
    } else {
      dir = dirs[dir]
    }
    count++
  }
  return board
}

const b = runBoard(raw)
plotBoard(b)



