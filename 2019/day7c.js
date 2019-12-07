const filereader = require('./utils/filereader.js')
const data = filereader.readFile('/day7.data', ',', true)

const compDayStates = (arr, phase, prev, i) => {
  let output = prev
  let done = false

  const val = (dif, flag) => !flag ?
    arr[arr[i + dif]] : arr[i + dif]

  const sto = (dif, v, flag) => {
    arr[arr[i + dif]] = v
  }

  const inc = (dif, flag) => {
    i = !flag ? i + dif : dif
  }

  function prt(v) {
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
        if (i === 0) {
          sto(1, phase);
          // console.log('I', phase)
        } else {
          sto(1, output);
          // console.log('I', output)
        }
        inc(2);
        break
      case 4: 
        output = val(1, f1)
        // console.log('O', output)
        inc(2);
        return [i, output]
        break
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

// const data = [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5]
// const signals = [9, 8, 7, 6, 5]

// const data = [3, 52, 1001, 52, -5, 52, 3, 53, 1, 52, 56, 54, 1007, 54, 5, 55, 1005, 55, 26, 1001, 54, -5, 54, 1105, 1, 12, 1, 53, 54, 53, 1008, 54, 0, 55, 1001, 55, 1, 55, 2, 53, 55, 53, 4, 53, 1001, 56, -1, 56, 1005, 56, 6, 99, 0, 0, 0, 0, 10]
// const signals = [9, 7, 8, 5, 6]

const _d = () => ([...data])

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

const SIG = permute([9, 8, 7, 6, 5])
const thrust = SIG.reduce((large, signals) => {
  const datas = [_d(), _d(), _d(), _d(), _d()]
  const ps = [0, 0, 0, 0, 0]

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
  while (!v[1]) {
    v = signals.reduce(process, v)
  }

  console.log(signals, v[0])
  if (v[0] > large) large = v[0]
  return large
}, 0)

console.log('Day 7/2:', thrust)

// 17585945 amswer too high
14260332