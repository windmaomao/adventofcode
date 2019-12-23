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

const bigOp = (a, b, c) => parseInt((BigInt(a) * BigInt(b)) % BigInt(c))

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
 * Calculate the shuffle list
 * a) big number of exponential operation
 * b) combine combo steps togather
 */

const bigOp2 = (a, b, c) => parseInt((BigInt(a) + BigInt(b)) % BigInt(c))

const joinTwo = (a, b, size) => {
  switch (a[0] + '-' + b[0]) {
    case 'i-i':
      return [
        ['i', bigOp(a[1], b[1], size)]
      ]
    case 'c-i':
      return [
        ['i', b[1]],
        ['c', bigOp(a[1], b[1], size)]
      ]
    case 'c-c':
      return [
        ['c', bigOp2(a[1], b[1], size)]
      ]
    case 'n-i':
      return [
        ['i', b[1]],
        ['c', -b[1] + 1],
        ['n']
      ]
    case 'n-c':
      return [
        ['c', -b[1]],
        ['n']
      ]
    case 'n-n':
      return []
  }
  return [a, b]
}

const compactShuffles = (list, size) => {
  if (list.length < 2) return list

  const res = []

  let i = 0, last = list[i]
  while (i < list.length - 1) {
    const joints = joinTwo(last, list[i + 1], size)
    // debug(i, joints.join('|'))
    switch (joints.length) {
      case 3: 
        res.push(joints[0])
        res.push(joints[1])
        last = joints[2]
        i++
        break;
      case 2:
        res.push(joints[0])
        last = joints[1]
        i++
        break;
      case 1:
        last = joints[0]
        i++
        break;
      case 0:
        i++
        if (i < list.length - 1) {
          last = list[i]
        } else {
          last = null
        }
        break;
    }
  }
  if (last) res.push(last)

  return res
}

const minimizeShuffles = (list, size) => {
  let shuffled = [...list]
  while (shuffled.length > 3) {
    shuffled = compactShuffles(shuffled, size)
  }
  return shuffled
}

debug(minimizeShuffles(orders, 119315717514047).join('|'))

const exp = (arr, n) => {
  if (n == 0) return []
  const base = n % 2 == 1 ? [...arr] : []
  const arr2 = [...arr].concat([...arr])
  return base.concat(exp(arr2, Math.trunc(n/2)))
}

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
