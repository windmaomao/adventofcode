const filereader = require('./utils/filereader.js')
const data = filereader.readFile('/day7.data', ',', true)
const permute = require('./utils/permute.js')

const compDayStates = (arr, phase, prev) => {
  let done = false
  let output = prev
  let i = 0

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
      case 3: sto(1, i === 0 ? phase : output); inc(2); break
      case 4: prt(val(1, f1)); inc(2); break
      case 5: val(1, f1) ? inc(val(2, f2), 1) : inc(3); break
      case 6: !val(1, f1) ? inc(val(2, f2), true) : inc(3); break
      case 7: sto(3, val(1, f1) < val(2, f2) ? 1 : 0); inc(4); break
      case 8: sto(3, val(1, f1) === val(2, f2) ? 1 : 0); inc(4); break
      default:
      case 99: done = true; break;
    }
  } while (!done)
  return output
}

const SIG = permute([0, 1, 2, 3, 4])
const thrusts = SIG.map(signals => {
  return signals.reduce((acc, s) => {
    return compDayStates([...data], s, acc)
  }, 0)
})

console.log('Day 7/1:', Math.max(...thrusts))


// const data = [3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15, 4, 15, 99, 0, 0]
// const data = [3, 23, 3, 24, 1002, 24, 10, 24, 1002, 23, -1, 23,
//   101, 5, 23, 23, 1, 24, 23, 23, 4, 23, 99, 0, 0]
