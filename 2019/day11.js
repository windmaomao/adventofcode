const filereader = require('./utils/filereader')
const raw = filereader.readFile('day11.data', ',', true)
const digits = require('./utils/digits')
const chunk = require('./utils/chunk')

const defaultOptions = {
  once: false,
  i: 0,
  prev: 0,
  output: false,
  verbose: false
}

const intcode = (arr, signal, ops) => {
  const options = Object.assign({}, defaultOptions, ops)
  let i = 0
  let done = false
  let relative = 0
  let output = signal
  const stream = []

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
    options.output && console.log('Output', v)
    stream.push(v)
  }

  const rel = dif => {
    relative += dif
    options.verbose && console.log('Relative', relative)
  }

  do {
    const op = arr[i]
    const ds = digits(op, 5)
    const [bp, _, f1, f2, f3] = ds
    options.verbose && console.log('OP', ds.reverse().join(''), arr.length)
    switch (bp) {
      case 1: sto(3, val(1, f1) + val(2, f2), f3); inc(4); break
      case 2: sto(3, val(1, f1) * val(2, f2), f3); inc(4); break
      case 3: sto(1, output, f1); inc(2); break
      case 4: prt(val(1, f1)); inc(2); break
      case 5: val(1, f1) ? inc(val(2, f2), 1) : inc(3); break
      case 6: !val(1, f1) ? inc(val(2, f2), true) : inc(3); break
      case 7: sto(3, val(1, f1) < val(2, f2) ? 1 : 0, f3); inc(4); break
      case 8: sto(3, val(1, f1) === val(2, f2) ? 1 : 0, f3); inc(4); break
      case 9: rel(val(1, f1)); inc(2); break
      default: console.log('Wrong code', bp)
      case 99: done = true; break;
    }
  } while (!done)

  return stream
}

//10448 not right

const insts = intcode(raw, 0, { output: false})
const pairs = chunk(insts, 2)

const nextDir = (d, turn) => {
  if (d === 'n' && turn === 0) return 'w'
  if (d === 'n' && turn === 1) return 'e'
  if (d === 'w' && turn === 0) return 's'
  if (d === 'w' && turn === 1) return 'n'
  if (d === 's' && turn === 0) return 'e'
  if (d === 's' && turn === 1) return 'w'
  if (d === 'e' && turn === 0) return 'n'
  if (d === 'e' && turn === 1) return 's'
  console.log('WRONG')
}

const dirPos = d => {
  if (d === 'n') return {x: 0, y: 1}
  if (d === 'e') return { x: 1, y: 0 }
  if (d === 's') return { x: 0, y: -1 }
  if (d === 'w') return { x: -1, y: 0 }
  console.log('WRONG')
}

const nextPos = (p, dir) => {
  const dp = dirPos(dir)
  return {x: p.x + dp.x, y: p.y + dp.y}
}

let p = {x: 0, y: 0}, dir = 'n'
pairs.reduce((acc, ins) => {
  // paint ins[0] at p
  acc.push(p)
  // turn 
  dir = nextDir(dir, ins[1])
  // move
  p = nextPos(p, dir)
  console.log(dir, p)
  return acc
}, [])

// 0 black., 1 white; 0# left, 1 right
