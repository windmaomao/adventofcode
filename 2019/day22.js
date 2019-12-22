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

const shufflePos = (ops, size, pos) => {
  let last = pos
  ops.reverse().forEach(op => {
    switch(op[0]) {
      case 'i':   // deal with increment
        last = moduleInverse(last, size, op[1])
        break;
      case 'n':   // deal into new stack
        last = size -1 - last
        break;
      case 'c':   // cut
        last = (last + op[1] + size) % size
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

debug(shufflePos(orders, 10007, 2020))

// debug(shufflePos(orders, 10, 9))

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