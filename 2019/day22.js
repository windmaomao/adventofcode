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

const shufflePos = (ops, pos, size) => {
  let last = pos
  ops.reverse().forEach(op => {
    switch(op[0]) {
      case 'increment':
        last = moduleInverse(last, size, op[1])
        break;
      case 'new stack':
        last = size -1 - last
        break;
      case 'cut':
        last = (last + op[1] + size) % size
        break;
    }
  })
  return last
}

const orders = [
  ['new stack'],
  ['cut', -2],
  ['increment', 7],
  ['cut', 8],
  ['cut', -4],
  ['increment', 7],
  ['cut', 3],
  ['increment', 9],
  ['increment', 3],
  ['cut', -1],
]

debug(shufflePos(orders, 0, 10))

// const testOrders1 = [
//   ['increment', 7],
//   ['new stack'],
//   ['new stack'],
// ]

// const testOrders2 = [
//   ['cut', 6],
//   ['increment', 7],
//   ['new stack'],
// ]

const testOrders4 = [
  ['new stack'],
  ['cut', -2],
  ['increment', 7], 
  ['cut', 8],
  ['cut', -4],
  ['increment', 7],
  ['cut', 3],
  ['increment', 9],
  ['increment', 3],
  ['cut', -1],
]
