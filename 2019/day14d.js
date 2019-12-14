const filereader = require('./utils/filereader')
const raw = filereader.readFile('day14a.data', '\n')
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
      total: 0
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

const calcFuel = () => {
  reactions['FUEL'].total = 1
  const names = Object.keys(reactions)

  const levelList = names.map(name => {
    return reactions[name].level
  })

  const sorted = sortList(levelList).reverse()

  let total = 0
  sorted.forEach(index => {
    const name = names[index]
    const right = reactions[name]
    debug(right)

    right.items.forEach(item => {
      const inc = right.total / right.quantity * item.quantity
      debug(inc)
      if (item.name == 'ORE') {
        total += inc
      } else {
        const left = reactions[item.name]
        left.total += inc
      }
    })
  })

  debug(sorted)
  debug(total)
}

getLevel('FUEL')
calcFuel()
// debug(reactions)