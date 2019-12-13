const filereader = require('./utils/filereader')
const raw = filereader.readFile('day13.data', ',', true)
const debug = require('debug')('day13:')

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

const tile = [' ', '|', 'B', '_', 'o']
const play = (data, board, input) => {
  let { done } = board
  // let count = 0, score = 0, pos = []
  // let print = false, once = true, i = 0, relative = 0, done = false, output = 0
  // let data = raw
  let { once, print, output, i, relative, score, pos } = board

  while (!done) {
    let res, x, y, tileId
    res = intcode(data, { once, print, output: input, i, relative })
    i = res.i; x = res.output; relative = res.relative
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; y = res.output; relative = res.relative
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; tileId = res.output; relative = res.relative

    if (x == -1 && y == 0) {
      score = tileId
      return { once, print, output, i, relative, score, pos }
    }

    // debug(x, y, tileId)
    pos[y][x] = tile[tileId]

    if (tileId >= 3) {
      return { once, print, output, i, relative, score, pos }
    }


    done = res.done
  }
  return { score, pos, count }
}


// debug('Count', count)
raw[0] = 2
const pos = new Array(21).fill(0).map(row => new Array(44).fill(' '))
let board = { once: true, print: false, output: 0, i: 0, relative: 0, score: 0, done: false, pos }


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

let scores = [], prev= 0
moves.forEach((m, i) => { 
  board = play(raw, board, m)
  if (board.score > prev) {
    prev = board.score
    scores.push(prev)
  }
})
const picture = pos.map(row => row.join('')).join('\n')
debug(picture)
debug('score', scores)

// const ddd = [38, 88, 10, 23, 95, 5, 66, 68, 72, 42, 94, 94, 51, 73, 3, 5, 35, 8, 28, 4, 20, 74, 32, 40, 20, 51, 17, 3, 62, 28, 59, 43, 10, 7, 52, 70, 82, 8, 52, 70, 50, 45, 79, 98, 65, 78, 20, 73, 64, 64, 87, 2, 11, 69, 28, 70, 37, 73, 3, 29, 57, 32, 15, 87, 42, 66, 1, 57, 26, 31, 23, 56, 51, 45, 50, 31, 10, 8, 74, 29, 73, 70, 72, 18, 74, 97, 88, 80, 46, 10, 20, 8, 97, 80, 54, 47, 64, 12, 48, 87, 14, 94, 49, 52, 30, 20, 21, 9, 98, 30, 51, 11, 30, 32, 78, 21, 72, 55, 38, 79, 74, 35, 93, 31, 40, 66, 86, 27, 12, 34, 80, 45, 44, 23, 4, 35, 35, 58, 6, 17, 47, 57, 30, 82, 65, 16, 82, 76, 63, 75, 76, 85, 86, 69, 29, 92, 79, 9, 14, 46, 76, 37, 66, 61, 15, 97, 7, 4, 23, 91, 8, 81, 81, 15, 59, 3, 29, 47, 24, 81, 85, 63, 10, 87, 9, 10, 87, 15, 25, 25, 62, 17, 30, 21, 87, 38, 92, 65, 88, 13, 23, 21, 75, 44, 89, 9, 86, 58, 81, 25, 75, 93, 46, 52, 44, 13, 70, 32, 71, 82, 7, 11, 54, 71, 11, 69, 3, 31, 7, 26, 23, 65, 10, 15, 10, 82, 33, 28, 67, 33, 65, 7, 70, 23, 92, 83, 53, 6, 35, 44, 65, 95, 23, 53, 13, 25, 90, 69, 7, 89, 34, 26, 91, 81, 84, 45, 61, 78, 87, 51, 98, 38, 5, 59, 29, 12, 5, 53, 78, 88, 4, 93, 56, 97, 65, 37, 22, 3, 52, 80, 1, 18, 43, 93, 20, 97, 65, 81, 84, 35, 6, 58, 16, 31, 86, 72, 47, 18, 27, 22, 97, 85, 52, 43, 95, 16, 12, 10, 44, 49, 24, 86, 28, 55, 19, 22]


// 8  77   73   70  81  24   9   91
// debug(ddd.reduce((acc, i) => acc+ i, 0))

// 15445,