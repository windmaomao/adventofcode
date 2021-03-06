const filereader = require('./utils/filereader')
const raw = filereader.readFile('day15.data', ',', true)
const intcode = require('./day13_intcode')
const debug = require('debug')('day15:')

const initBoard = () => {
  const pos = new Array(60).fill(0).map(row => new Array(60).fill(' '))
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
  // const saved = board.pos[p.y][p.x]
  // board.pos[p.y][p.x] = 'x'
  const picture = board.pos.map(row => row.join('')).join('\n')
  debug(picture)
  // board.pos[p.y][p.x] = saved
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
  let { once, print, output, i, relative, pos, current, next, dir } = board
  const symbols = ['#', '.', '.']
  const res = intcode(data, { once, print, output, i, relative })
  if (pos[next.y][next.x] == ' ') {
    pos[next.y][next.x] = symbols[res.output]
    if (res.output == 2) debug(next.x, next.y, 'bingo') 
  }
  return { ...res, pos, current, next, dir }
}


const commandPos = (p, c) => {
  if (c === 1) return { x: p.x, y: p.y - 1 }
  if (c === 2) return { x: p.x, y: p.y + 1 }
  if (c === 3) return { x: p.x - 1, y: p.y }
  if (c === 4) return { x: p.x + 1, y: p.y }
}

const commands = { 'n': 1, 's': 2, 'w': 3, 'e': 4 }
const dirs = { 'o': 's', '.': 's', 'e': 'n', 'n': 'w', 'w': 's', 's': 'e' }
const clocks = { 'e': 's', 'n': 'e', 'w': 'n', 's': 'w' }
// const dirs = { 'o': 's', '.': 's', 'e': 's', 'n': 'e', 'w': 'n', 's': 'w' }
// const clocks = { 'e': 'n', 'n': 'w', 'w': 's', 's': 'e' }

// 922
const runBoard = (data) => {
  let board = initBoard(), count = 0, p = { x: 35, y: 25 }, lastDir = 's', total = 4022

  // empty before move/check
  const empty = pos => board.pos[pos.y][pos.x] == '.' || board.pos[pos.y][pos.x] == ' '

  while (count < total) {
    // debug('step', count)
    board.current = p
    // debug('current', board.current)
    const dir = board.pos[p.y][p.x]
    if (dir == '.') {
      board.dir = clocks[lastDir]
    } else {
      board.dir = dirs[dir]
    }
    board.pos[p.y][p.x] = board.dir
    // debug('dir', board.dir)
    const command = commands[board.dir]
    board.next = commandPos(p, command)
    board.output = command
    // debug('next', board.next)
    // debug('empty', empty(board.next), board.pos[board.next.y][board.next.x])

    // if (empty(board.next)) {
      board = stepBoard(data, board)
      if (board.output) {
        p.x = board.next.x; p.y = board.next.y
        lastDir = board.dir
        // debug('dir', p.x, p.y, lastDir)
      }
    // }

    count++
  }
  return board
}

const b = runBoard(raw)
plotBoard(b)

debug('part 2: ', b.current)

const op = { x: 17, y: 37 }
let count2 = 0
b.pos[op.y][op.x] = 'O'

const letters = ['e', 'n', 's', 'w']
const paintPoint = (pos, p) => {
  if (letters.indexOf(pos[p.y][p.x]) >=0) {
    pos[p.y][p.x] = 'O'
  }
}
const paintBound = (pos, p) => {
  paintPoint(pos, { x: p.x+1, y: p.y })
  paintPoint(pos, { x: p.x-1, y: p.y })
  paintPoint(pos, { x: p.x, y: p.y+1 })
  paintPoint(pos, { x: p.x, y: p.y-1 })
}

while (count2 < 481) {
  // collect all the O
  let os = []
  b.pos.forEach((row, y) => {
    row.forEach((_, x) => {
      if (b.pos[y][x] == 'O') os.push({ x, y })
    })
  })
  // console.log(os)

  os.forEach(p => {
    paintBound(b.pos, p)
  })

  // plotBoard(b)
  count2++
}

plotBoard(b)
debug('part 2: ', count2)



