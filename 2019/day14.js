const filereader = require('./utils/filereader')
const raw = filereader.readFile('day14c.data', '\n')
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
      asks: 0
    }
  } else {
    debug('warning')
  }

  return acc
}, {})

const gatherRaw = (name, quantity) => {
  const re = reactions[name]
  if (re.items[0].name === 'ORE') return [{ name, quantity }]

  const run = quantity / re.quantity
  return re.items.reduce((acc, item) => {
    return acc.concat(
      gatherRaw(item.name, item.quantity).map(item2 => {
        const copy = {...item2}
        copy.quantity = copy.quantity * run
        return copy
      })
    )
  }, [])
}

const totalCost = (items) => {
  const gather = items.reduce((acc, item) => {
    if (!acc[item.name]) acc[item.name] = 0
    acc[item.name] += item.quantity
    return acc
  }, {})
  
  return Object.keys(gather).reduce((acc, name) => {
    const re = reactions[name]
    const quantity = gather[name]
    const runs = Math.ceil(quantity / re.quantity)
    const cost = runs * re.items[0].quantity
    // debug(name, quantity, runs, cost)
    return acc + cost
  }, 0)
}

const ddd = gatherRaw('FUEL', 1)
debug(ddd)
debug(totalCost(ddd))



// const calcFuel = (element, quantity) => { 
//   if (element === 'ORE') return quantity

//   const dest = reactions[element]

//   const eqnCost = dest.items.reduce((acc, item) => {
//     return acc + calcFuel(item.name, item.quantity)
//   }, 0)

//   const eqnRuns = Math.round(quantity / dest.quantity)
//   const total = eqnRuns * eqnCost
//   debug(element, quantity, total)
//   dest.total = total
//   return total
// }

// debug(calcFuel('FUEL', 1))

// const line =  '2 AB, 3 BC, 4 CA => 1 FUEL'
// const parts = line.split(' => ')

// debug(parts)
// debug(parseQuantity(parts[1]))