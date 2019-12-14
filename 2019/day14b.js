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
      askQuantity: 0,
      calculated: false
    }
  } else {
    debug('warning')
  }

  return acc
}, {})

const updateAsks = (name, quantity) => {
  if (name == 'ORE') return 

  const re = reactions[name]
  re.askQuantity = re.askQuantity + quantity

  re.items.forEach(item => {
    updateAsks(item.name, quantity / re.quantity * item.quantity)
  })
}

updateAsks('FUEL', 1)
debug(Object.keys(reactions))

let done = false
while (!done) {

  const names = Object.keys(reactions).filter(name => {
    let independent = true
    reactions[name].items.forEach(item => {
      if (item.name != 'ORE') {
        const child = reactions[item.name]
        if (!child.calculated) independent = false
      }
    })
    return independent
  })

  debug(names)

  done = true
}


// const calcTotal = (name, quantity) => {
//   const re = reactions[name]
//   const runs = Math.ceil(quantity / re.quantity)
//   debug(name, runs)

//   return re.items.reduce((acc, item) => {
//     if (item.name == 'ORE') {
//       return acc + item.quantity
//     } else {
//       return acc + runs * calcTotal(item.name, item.quantity)
//     }
//   }, 0)
// }

// debug(calcTotal('FUEL', 1))

// updateAsks('FUEL', 1)
// debug(reactions['A'])
