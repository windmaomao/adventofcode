const filereader = require('./utils/filereader')
const raw = filereader.readFile('day22.data', '\n')
const debug = require('debug')('day22:')

const moduleInverse = (pos, size, modBy) => {
  let i = 0, last = pos
  while (last != 0) {
    last -= modBy
    if (last < 0) last += size
    i++
  }
  return i
}

const moduleInverse2 = (pos, size, modBy) => {
  let i = 0, last = pos, newLast = -1
  while (newLast != 0) {
    newLast = last % modBy
    i += (last - newLast) / modBy
    last = newLast + size
  }
  return i
}

const moduleInverse3 = (a, n) => {
  let t = 0, newt = 1
  let r = n, newr = a
  let q
  while (newr != 0) {
    q = Math.trunc(r / newr)
    t = newt; newt = t - q * newt
    r = newr; newr = r - q * newr
  }
  return r > 1 ? null : t % n
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
          last = (last * moduleInverse3(op[1], size)) % size
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

const rOrders = [
  ['i', 102104511168549],
  ['c', 33232573029476]
]
debug('Part 2:', shufflePos(rOrders, 119315717514047, 2020, true))

// const testOrders1 = [
//   ['i', 7],
//   ['n'],
//   ['n'],
// ]

// const testOrders2 = [
//   ['cut', 6],
//   ['increment', 7],
//   ['new stack'],
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