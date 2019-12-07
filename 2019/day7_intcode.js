const defaultOptions = {
  once: false,
  i: 0,
  prev: 0,
}

const intcode = (arr, signal, ops) => {
  const options = Object.assign({}, defaultOptions, ops)
  let output = options.prev
  let done = false
  let i = options.i

  const val = (dif, flag) => !flag ? arr[arr[i + dif]] : arr[i + dif]
  const sto = (dif, v) => { arr[arr[i + dif]] = v }
  const inc = (dif, flag) => { i = !flag ? i + dif : dif }
  const prt = v => { output = v; }

  do {
    const op = arr[i]
    const bp = op % 100
    const f1 = (op / 100) % 10 | 0
    const f2 = (op / 1000) % 10 | 0
    // console.log('OP', f2, f1, bp)
    switch (bp) {
      case 1: sto(3, val(1, f1) + val(2, f2)); inc(4); break
      case 2: sto(3, val(1, f1) * val(2, f2)); inc(4); break
      case 3: sto(1, i === 0 ? signal : output); inc(2); break
      case 4: 
        prt(val(1, f1)); inc(2); 
        if (options.once) return [i, output]; 
        break
      case 5: val(1, f1) ? inc(val(2, f2), 1) : inc(3); break
      case 6: !val(1, f1) ? inc(val(2, f2), true) : inc(3); break
      case 7: sto(3, val(1, f1) < val(2, f2) ? 1 : 0); inc(4); break
      case 8: sto(3, val(1, f1) === val(2, f2) ? 1 : 0); inc(4); break
      default:
      case 99: done = true; break;
    }
  } while (!done)
  if (options.once) return false
  return output
}

module.exports = intcode