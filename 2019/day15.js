const filereader = require('./utils/filereader')
const raw = filereader.readFile('day15.data', ',', true)
const debug = require('debug')('day15:')

const digits = require('./utils/digits')

const defaultOptions = {
  done: false,        // if code is fully executed
  once: false,        // if code should output once and return
  i: 0,               // saved state i
  output: 0,          // saved state value
  relative: 0,        // saved state relative
  print: false,       // if print output
  verbose: false,     // if print more output
}

const intcode = (arr, ops) => {
  const options = Object.assign({}, defaultOptions, ops)
  let i = options.i
  let relative = options.relative
  let output = options.output
  let done = options.done

  const _v = (arr, pos) => pos < arr.length ? (
    arr[pos] === undefined ? 0 : arr[pos]
  ) : 0

  const val = (dif, flag) => !flag ? _v(arr, _v(arr, i + dif)) :
    (flag == 1 ? _v(arr, i + dif) : _v(arr, _v(arr, i + dif) + relative))

  const sto = (dif, v, flag) => {
    !flag ? (arr[_v(arr, i + dif)] = v) :
      (arr[_v(arr, i + dif) + relative] = v)
  }

  const inc = (dif, flag) => { i = !flag ? i + dif : dif }

  const prt = v => {
    output = v;
    // options.print && console.log('Output', v)
  }

  const rel = dif => {
    relative += dif
    options.verbose && console.log('Relative', relative)
  }

  const sav = () => {
    if (!options.once) return false
    if (output === 99) done = true
    const op2 = Object.assign({}, options, { i, output, relative, done })
    options.print && console.log(op2)
    return op2
  }

  while (!done) {
    const op = arr[i]
    const ds = digits(op, 5)
    const [bp, _, f1, f2, f3] = ds
    options.verbose && console.log('OP', ds.reverse().join(''), arr.length)
    switch (bp) {
      case 1: sto(3, val(1, f1) + val(2, f2), f3); inc(4); break
      case 2: sto(3, val(1, f1) * val(2, f2), f3); inc(4); break
      case 3: sto(1, output, f1); inc(2); break
      case 4:
        prt(val(1, f1)); inc(2);
        const _sav = sav(); if (_sav) return _sav
        break
      case 5: val(1, f1) ? inc(val(2, f2), 1) : inc(3); break
      case 6: !val(1, f1) ? inc(val(2, f2), true) : inc(3); break
      case 7: sto(3, val(1, f1) < val(2, f2) ? 1 : 0, f3); inc(4); break
      case 8: sto(3, val(1, f1) === val(2, f2) ? 1 : 0, f3); inc(4); break
      case 9: rel(val(1, f1)); inc(2); break
      default: options.print && console.log('Wrong code', bp)
      case 99: done = true; break;
    }
  }
  return sav()
}

const initBoard = () => {
  const pos = new Array(21).fill(0).map(row => new Array(44).fill(' '))
  const p = { x: 15, y: 15 }
  pos[p.y][p.x] = 'o'
  return {
    once: true, print: false,
    output: 0, i: 0, relative: 0, score: 0, done: false,
    pos, p
  }
}

const plotBoard = (board) => {
  const picture = board.pos.map(row => row.join('')).join('\n')
  debug(picture)
}

const nextPos = (p, c) => {
  if (c === 1) return { x: p.x, y: p.y - 1 }
  if (c === 2) return { x: p.x, y: p.y + 1 }
  if (c === 3) return { x: p.x - 1, y: p.y }
  if (c === 4) return { x: p.x + 1, y: p.y }
}

const stepBoard = (data, board) => {
  let {
    done, once, print, output, i, relative,
    pos, command, p
  } = board

  output = command

  let res, status
  res = intcode(data, { once, print, output, i, relative })
  i = res.i; status = res.output; relative = res.relative

  const np = nextPos(p, output)
  if (status == 0) {
    pos[np.y][np.x] = '#'
    output = 4-output
  }
  if (status == 1) {
    pos[np.y][np.x] = '.'
    p.x = np.x; p.y = np.y
  }
  if (status == 2) {
    pos[np.y][np.x] = 'D'
    p.x = np.x; p.y = np.y
  }
  debug(status)

  return board
}

// north(1), south(2), west(3), and east(4)
// 0, hit wall, 1, ok, 2: bingo

const raw1 = [...raw]
const runBoard = (data) => {
  let board = initBoard()
  let commands = [1]
  commands.forEach(c => {
    board.command = c
    board = stepBoard(data, board)
  })
  return board
}

const b = runBoard(raw1)
plotBoard(b)
debug('Day 15/1') 

// debug(raw)