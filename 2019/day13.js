const filereader = require('./utils/filereader')
const raw = filereader.readFile('day13.data', ',', true)
const debug = require('debug')('day13:')

// print(raw) 

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

let count = 0, res, x, y, tileId
let print = false, once = true, i = 0, relative = 0, done = false, output = 0
let data = raw

while (!done) {
  res = intcode(data, { once, print, output, i, relative })
  i = res.i; x = res.output; relative = res.relative
  res = intcode(data, { once, print, output, i, relative })
  i = res.i; y = res.output; relative = res.relative
  res = intcode(data, { once, print, output, i, relative })
  i = res.i; tileId = res.output; relative = res.relative

  debug(x, y, tileId)
  if (tileId == 2) count++

  done = res.done
}

debug('Count', count)