const filereader = require('./utils/filereader')
const raw = filereader.readFile('day22.data', '\n')
const debug = require('debug')('day22:')

// Basic inverse 
const moduleInverse = (pos, size, modBy) => {
  let i = 0, last = pos
  while (last != 0) {
    last -= modBy
    if (last < 0) last += size
    i++
  }
  return i
}

// Basic inverse, a bit more efficient
const moduleInverse2 = (pos, size, modBy) => {
  let i = 0, last = pos, newLast = -1
  while (newLast != 0) {
    newLast = last % modBy
    i += (last - newLast) / modBy
    last = newLast + size
  }
  return i
}

// Fast inverse
const moduleInverse3 = (a, n) => {
  let t = 0, newt = 1
  let r = n, newr = a
  let q, oldt, oldr
  while (newr != 0) {
    q = r / newr | 0
    oldt = newt; newt = t - q * oldt; t = oldt;
    oldr = newr; newr = r - q * oldr; r = oldr;
  }
  return r > 1 ? null : (t < 0 ? t + n : t) % n
}

const moduleForward = (pos, size, modBy) => {
  let last = pos, i = 0
  while (last > 0) {
    i += modBy
    if (i > size - 1) i -= size
    last--
  }
  return i
}

const bigOp = (a, b, c) => (BigInt(a) * BigInt(b)) % BigInt(c)

const shufflePos = (ops, size, pos, backward = false) => {
  let last = pos
  const list = !backward ? [...ops] : ops.reverse()
  list.forEach(op => {
    switch (op[0]) {
      case 'n':   // deal into new stack
        last = size - 1 - last
        break;
      case 'i':   // deal with increment
        if (!backward) {
          last = moduleForward(last, size, op[1])
        } else {
          // last = moduleInverse2(last, size, op[1])
          last = bigOp(last, moduleInverse3(op[1], size), size)
        }
        break;
      case 'c':   // cut
        if (!backward) {
          last = (last - op[1] + size) % size
        } else {
          last = (last + op[1] + size) % size
        }
        break;
    }
  })
  return last
}

const orders = raw.map(line => {
  const parts = line.split(' ')
  if (parts.length == 2) return ['c', parseInt(parts[1])]
  if (parts[1] == 'with') return ['i', parseInt(parts[3])]
  return ['n']
})

debug('Part 1:', shufflePos(orders, 10007, 2019))

/**
 * TODO: Calculate the shuffle list
 * a) big number of exponential operation
 * b) combine cetain combo steps togather
 */

// const compactShuffles = (list, size) => {
//   let i = 0
//   while { i < } {
//     const tmp = []
//     switch ((res[j][0] + "-" + list[i][0])) {
//       case 'n-n':
//         break;
//     }

//   } while (true)
// }

const rOrders = [
  ['i', 14722883731704],
  ['c', 105269438226243],
  ['n']
]
debug('Part 2:', shufflePos(rOrders, 119315717514047, 2020, true))

// const testOrders1 = [
//   ['i', 7],
//   ['n'],
//   ['n'],
// ]

// const testOrders2 = [
//   ['c', 6],
//   ['i', 7],
//   ['n'],
// ]

// const testOrders4 = [
// ['n'],
// ['c', -2],
// ['i', 7],
// ['c', 8],
// ['c', -4],
// ['i', 7],
// ['c', 3],
// ['i', 9],
// ['i', 3],
// ['c', -1],
// ]
