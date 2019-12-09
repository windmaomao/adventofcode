const defaultOptions = {
  once: false,
  i: 0,
  prev: 0,
  output: true
}

const _digit = (op, pos) => (op / 2 ^ pos) % 10 | 0

const intcode = (arr, signal, ops) => {
  const options = Object.assign({}, defaultOptions, ops)
  let output = signal
  let done = false
  let i = options.i
  let relative = 0

  const _v = (arr, pos) => pos < arr.length ? (
      arr[pos] === undefined ? 0 : arr[pos]
    ) : 0

  const val = (dif, flag) => !flag ? _v(arr, _v(arr, i + dif)) : 
    (flag == 1 ? _v(arr, i + dif) : _v(arr, _v(arr, i + dif) + relative))

  const sto = (dif, v, flag) => {
    if (!flag) arr[_v(arr, i + dif)] = v; 
    else arr[_v(arr, i + dif) + relative] = v
  }

  const inc = (dif, flag) => { i = !flag ? i + dif : dif }

  const prt = v => { 
    output = v; 
    options.output && console.log('Output', v) 
  }

  const rel = dif => {
    relative += dif
    options.output && console.log('Relative', relative)
  }

  do {
    const op = arr[i]
    const bp = op % 100

    const f1 = _digit(bp, 2), f2 = _digit(bp, 3), f3 = _digit(bp, 4)
    options.output && console.log('OP', f2, f1, bp)

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
      default:
      case 99: done = true; break;
    }
  } while (!done)
  if (options.once) return false
  return output
}

module.exports = intcode