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
  let { once, print, output, i, relative, score, pos, ball, bar } = board

  while (!done) {
    let res, x, y, tileId
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; x = res.output; relative = res.relative
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; y = res.output; relative = res.relative
    res = intcode(data, { once, print, output, i, relative })
    i = res.i; tileId = res.output; relative = res.relative

    if (x == -1 && y == 0) {
      score = tileId
      return { once, print, output, i, relative, score, pos, ball, bar }
    }

    // debug(x, y, tileId)
    pos[y][x] = tile[tileId]

    if (tileId === 4) {
      ball.x = x; ball.y = y
      // debug('ball', ball)
    }

    if (tileId === 3) {
      bar.x = x; bar.y = y
      // debug('bar', ball)
    }

    output = Math.sign(ball.x - bar.x)

    // if (tileId >= 3) {
    //   return { once, print, output, i, relative, score, pos, ball, bar }
    // }


    done = res.done
  }
  return { score, pos, count }
}


// debug('Count', count)
raw[0] = 2
const pos = new Array(21).fill(0).map(row => new Array(44).fill(' '))
let board = { 
  once: true, print: false, output: 0, i: 0, relative: 0, score: 0, done: false, pos,
  bar: { x: 0, y: 0 }, ball: { x: 0, y: 0 }
}

// const z = (n,v) => new Array(n).fill(v)
// const moves = [0, 
//   ...z(2, -1), 
//   ...z(6, 0), // 8 
//   ...z(4, 0), // 85, 77
//   ...z(12, -1), 
//   ...z(1, 0), // 158, 73
//   ...z(12, -1),
//   ...z(1, 0), // 228, 70,
//   ...z(12, -1),
//   ...z(25, 0), // 309, 81
//   ...z(17, 1),
//   ...z(4, 0)
// ]

const moves = new Array(327).fill(0)

let scores = [], prev= 0
moves.forEach((m, i) => { 
  board = play(raw, board)
  if (board.score > prev) {
    prev = board.score
    scores.push(prev)
  }
  // debug(scores)
})

const length = scores.length

debug(scores[length - 1])

// const picture = pos.map(row => row.join('')).join('\n')
// debug(picture)
// debug('score', scores)

// const ddd = [76, 15, 12, 20, 17, 35, 34, 85, 94, 21, 61, 77, 95, 65, 26, 54, 97, 28, 64, 78, 13, 60, 7, 20, 13, 39, 26, 86, 92, 16, 31, 89, 45, 57, 59, 94, 4, 79, 83, 27, 94, 86, 44, 96, 79, 56, 56, 68, 94, 84, 79, 17, 16, 43, 86, 35, 76, 47, 16, 20, 71, 88, 82, 7, 12, 17, 8, 63, 61, 88, 40, 93, 14, 85, 9, 34, 70, 27, 27, 58, 71, 69, 88, 14, 72, 51, 33, 43, 15, 44, 84, 29, 35, 18, 82, 14, 45, 98, 10, 35, 62, 74, 16, 44, 7, 51, 38, 50, 31, 82, 72, 21, 94, 21, 53, 73, 40, 24, 93, 96, 6, 64, 19, 57, 51, 56, 53, 57, 58, 68, 78, 9, 79, 87, 52, 62, 36, 17, 80, 30, 42, 65, 96, 3, 55, 56, 95, 89, 42, 33, 23, 30, 90, 47, 18, 68, 94, 51, 26, 52, 23, 32, 13, 3, 93, 91, 44, 1, 30, 86, 93, 8, 69, 72, 2, 53, 33, 23, 58, 48, 69, 74, 24, 6, 33, 85, 96, 38, 83, 51, 61, 96, 79, 25, 14, 78, 83, 41, 85, 32, 94, 95, 67, 87, 53, 47, 81, 14, 56, 88, 37, 95, 54, 83, 84, 41, 35, 75, 33, 77, 24, 32, 62, 10, 5, 91, 82, 63, 21, 81, 71, 5, 89, 4, 64, 87, 32, 59, 22, 3, 98, 79, 70, 79, 5, 52, 26, 70, 19, 95, 23, 45, 77, 79, 60, 89, 89, 88, 45, 5, 50, 31, 47, 14, 76, 22, 9, 48, 71, 4, 15, 38, 82, 61, 62, 59, 68, 50, 81, 71, 57, 47, 41, 9, 63, 77, 49, 91, 25, 2, 14, 88, 60, 43, 44, 7, 14, 51, 93, 44, 45, 75, 19, 49, 34, 41, 19, 48, 25, 34, 32, 88, 29, 51, 88, 71, 79, 76, 7, 81, 73, 90, 42, 78, 43, 50]

// debug(ddd.length)
// 8  77   73   70  81  24   9   91    53  14
// debug(ddd.reduce((acc, i) => acc+ i, 0))

// 16895, too high
// 15988, good