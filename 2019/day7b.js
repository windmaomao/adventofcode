const filereader = require('./utils/filereader.js')
const data = filereader.readFile('/day7.data', ',', true)
const permute = require('./utils/permute.js')

const compDayStates = (arr, phase, prev, i) => {
  let output = prev
  let done = false

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
      case 4: prt(val(1, f1)); inc(2); return [i, output]; break
      case 5: val(1, f1) ? inc(val(2, f2), 1) : inc(3); break
      case 6: !val(1, f1) ? inc(val(2, f2), true) : inc(3); break
      case 7: sto(3, val(1, f1) < val(2, f2) ? 1 : 0); inc(4); break
      case 8: sto(3, val(1, f1) === val(2, f2) ? 1 : 0); inc(4); break
      default:
      case 99: done = true; break;
    }
  } while (!done)
  return false
}

const _d = () => ([...data])
const SIG = permute([9, 8, 7, 6, 5])
const thrusts = SIG.map(signals => {
  const datas = new Array(5).fill(_d())
  const ps = new Array(5).fill(0)

  const process = (acc, s, i) => {
    if (acc[1]) return acc

    const res = compDayStates(datas[i], s, acc[0], ps[i])
    if (res) { 
      ps[i] = res[0]
      acc[0] = res[1]
      // console.log(i, acc)
    } else {
      acc[1] = true
      // console.log('DONE')
    }
    return acc
  }  

  let v = [0, false]
  while (!v[1]) { v = signals.reduce(process, v) }

  return v[0]
}, 0)

console.log('Day 7/2:', Math.max(...thrusts))

// 17585945 amswer too high
// 14260332

// const data = [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5]
// const signals = [9, 8, 7, 6, 5]

// const data = [3, 52, 1001, 52, -5, 52, 3, 53, 1, 52, 56, 54, 1007, 54, 5, 55, 1005, 55, 26, 1001, 54, -5, 54, 1105, 1, 12, 1, 53, 54, 53, 1008, 54, 0, 55, 1001, 55, 1, 55, 2, 53, 55, 53, 4, 53, 1001, 56, -1, 56, 1005, 56, 6, 99, 0, 0, 0, 0, 10]
// const signals = [9, 7, 8, 5, 6]

