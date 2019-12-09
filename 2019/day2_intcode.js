const digits = require('./utils/digits')

const intcode = (arr) => {
  let done = false
  let i = 0

  const val = (dif, flag) => !flag ? arr[arr[i + dif]] : arr[i + dif]
  const sto = (dif, v) => { arr[arr[i + dif]] = v }
  const inc = (dif, flag) => { i = !flag ? i + dif : dif }

  do {
    const op = arr[i]
    const ds = digits(op, 5)
    const [bp, _, f1, f2] = ds
    // console.log('OP', f2, f1, bp)
    switch (bp) {
      case 1: sto(3, val(1, f1) + val(2, f2)); inc(4); break
      case 2: sto(3, val(1, f1) * val(2, f2)); inc(4); break
      default:
      case 99: done = true; break;
    }
    done = (i >= arr.length) || arr[i] === 99
  } while (!done)
  return arr[0]
}

module.exports = intcode