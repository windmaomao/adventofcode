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
      level: 0
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

getLevel('FUEL')
debug(reactions)