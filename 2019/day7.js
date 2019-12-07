const filereader = require('./utils/filereader.js')
const data = filereader.readFile('/day7.data', ',', true)

const signals = [4, 3, 2, 1, 0]

const INPUT = 5

const compDayStates = arr => {
  let i = 0
  let done = false

  const val = (dif, flag) => !flag ?
    arr[arr[i + dif]] : arr[i + dif]

  const sto = (dif, v, flag) => {
    arr[arr[i + dif]] = v
  }

  const inc = (dif, flag) => {
    i = !flag ? i + dif : dif
  }

  const prt = v => { console.log('Output', v) }

  do {
    console.log(i, arr[i])
    const op = arr[i]
    const bp = op % 100
    const f1 = (op / 100) % 10 | 0
    const f2 = (op / 1000) % 10 | 0
    console.log('OP', f2, f1, bp)
    switch (bp) {
      case 1: sto(3, val(1, f1) + val(2, f2)); inc(4); break
      case 2: sto(3, val(1, f1) * val(2, f2)); inc(4); break
      case 3: 
        console.log('ASK INPUT')
        sto(1, INPUT); inc(2); break
      case 4: prt(val(1, f1)); inc(2); break
      case 5: val(1, f1) ? inc(val(2, f2), 1) : inc(3); break
      case 6: !val(1, f1) ? inc(val(2, f2), true) : inc(3); break
      case 7: sto(3, val(1, f1) < val(2, f2) ? 1 : 0); inc(4); break
      case 8: sto(3, val(1, f1) === val(2, f2) ? 1 : 0); inc(4); break
      default:
      case 99: done = true; break;
    }
  } while (!done)
  return arr
}

console.log('Day 7/1:', compDayStates(data))
