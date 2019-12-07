const filereader = require('./utils/filereader.js')
// const data = filereader.readFile('/day7.data', ',', true)

const compDayStates = (arr, phase, prev) => {
  const INPUT = [phase, prev]
  let i = 0
  let j = 0
  let done = false
  let output

  const val = (dif, flag) => !flag ?
    arr[arr[i + dif]] : arr[i + dif]

  const sto = (dif, v, flag) => {
    arr[arr[i + dif]] = v
  }

  const inc = (dif, flag) => {
    i = !flag ? i + dif : dif
  }

  const prt = v => { 
    output = v
    console.log('Output', v) 
  }

  do {
    const op = arr[i]
    const bp = op % 100
    const f1 = (op / 100) % 10 | 0
    const f2 = (op / 1000) % 10 | 0
    // console.log('OP', f2, f1, bp)
    switch (bp) {
      case 1: sto(3, val(1, f1) + val(2, f2)); inc(4); break
      case 2: sto(3, val(1, f1) * val(2, f2)); inc(4); break
      case 3: 
        console.log('Input', j, INPUT[j])
        sto(1, INPUT[j]); j++; inc(2); 
        break
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

const data = [3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15, 4, 15, 99, 0, 0]
// const signals = [4,3,2,1,0]

// const data = [3, 23, 3, 24, 1002, 24, 10, 24, 1002, 23, -1, 23,
//   101, 5, 23, 23, 1, 24, 23, 23, 4, 23, 99, 0, 0]
// const signals = [0, 1, 2, 3, 4]

// console.log('Day 7/1:', signals.reduce((acc, s) => {
//   return compDayStates([...data], s, acc)
// }, 0))

function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const SIG = permute([0, 1, 2, 3, 4])
const thrust = SIG.reduce((large, signals) => {
  const v = signals.reduce((acc, s) => {
    return compDayStates([...data], s, acc)
  }, 0)
  console.log(signals, v)
  if (v > large) large = v
  return large
}, 0)

console.log('Day 7/1:', thrust)
