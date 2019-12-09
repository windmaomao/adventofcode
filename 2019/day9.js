const filereader = require('./utils/filereader')
const data = filereader.readFile('/day9.data', ',', true)
// const data = [104, 1125899906842624, 99]
// const data = [1102, 34915192, 34915192, 7, 4, 7, 99, 0]
// const data = [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99]

let INPUT = 1

const compDayStates = arr => {
  let i = 0
  let done = false
  let relative = 0
  let output = INPUT

  const _v = (arr, pos) => 
    pos < arr.length ? (
      arr[pos] === undefined ? 0 : arr[pos]
    ) : 0

  const val = (dif, flag) => !flag ?
    _v(arr, _v(arr, i + dif)) : (flag == 1 ? 
      _v(arr, i + dif) : 
      _v(arr, _v(arr, i + dif) + relative) 
    )

  const sto = (dif, v, flag) => {
    if (!flag) {
      arr[_v(arr, i + dif)] = v
    } else {
      arr[_v(arr, i + dif) + relative] = v
    }
  }

  const inc = (dif, flag) => {
    i = !flag ? i + dif : dif
  }

  const prt = v => { 
    output = v
    console.log('Output', v) 
  }

  const rel = (dif) => {
    relative += dif
    // console.log('Relative', relative)
  }

  do {
    const op = arr[i]
    const bp = op % 100
    const f1 = (op / 100) % 10 | 0
    const f2 = (op / 1000) % 10 | 0
    const f3 = (op / 10000) % 10 | 0
    // console.log('OP', f2, f1, bp, arr.length)
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
  return true
}

console.log('Day 9/1:', compDayStates([...data]))
INPUT = 2
console.log('Day 9/2:', compDayStates([...data]))
