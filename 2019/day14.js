const filereader = require('./utils/filereader')
const raw = filereader.readFile('day14.data', '\n')
const debug = require('debug')('day14:')

const parseQuantity = (item) => {
  const [quantity, name] = item.split(' ')
  return { name, quantity: parseInt(quantity) }
}

const reactions = raw.reduce((acc, line) => {
  const [lefts, right] = line.split(' => ')
  const dest = parseQuantity(right)

  if (!acc[dest.name]) {
    acc[dest.name] = {
      name: dest.name,
      quantity: dest.quantity,
      items: lefts.split(', ').map(parseQuantity),
      level: 0,
      total: 0,
    }
  } else {
    debug('warning')
  }

  return acc
}, {})

const getLevel = (name) => {
  if (name == 'ORE') return 0

  const re = reactions[name]
  
  re.level = re.items.reduce((acc, item) => {
    const level = getLevel(item.name)
    if (level > acc) return level
    return acc
  }, 0) + 1

  return re.level
}

const sortList = test => test.map((val, ind) => { return { ind, val } })
  .sort((a, b) => { return a.val > b.val ? 1 : a.val == b.val ? 0 : -1 })
  .map((obj) => obj.ind);

const calcFuel = (N) => {
  reactions['FUEL'].total = N
  const names = Object.keys(reactions)

  const levelList = names.map(name => {
    return reactions[name].level
  })

  const sorted = sortList(levelList).reverse()

  let total = 0
  sorted.forEach(index => {
    const name = names[index]
    const right = reactions[name]
    const coef = Math.ceil(right.total / right.quantity)

    right.items.forEach(item => {
      const inc = coef * item.quantity
      if (item.name == 'ORE') {
        total += inc
      } else {
        const left = reactions[item.name]
        left.total += inc
      }
    })
  })

  return total
}

getLevel('FUEL')
debug('Part 1:', calcFuel(1))

const reset = () => {
  const names = Object.keys(reactions)
  names.forEach(name => {
    const re = reactions[name]
    re.total = 0
  })
}

let i = 1639300, totalFuel
do {
  i++
  reset()
  totalFuel = calcFuel(i)
} while (totalFuel < 1000000000000)
debug('Part 2:', i - 1)
// debug(reactions)
// 1000000000000