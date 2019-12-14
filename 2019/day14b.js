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
      askQuantity: 0,
      // calculated: false
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
  const runs = quantity / re.quantity

  re.items.forEach(item => {
    updateAsks(item.name, runs * item.quantity)
  })
}

const refineAsks = (name) => {
  if (name == 'ORE') return 
  const re = reactions[name]
  const newAsk = Math.ceil(re.askQuantity / re.quantity) * re.quantity
  if (newAsk > re.askQuantity) {
    updateAsks(name, newAsk - re.askQuantity)
  }
}

const calcTotal = () => {
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

  const total = names.reduce((acc, name) => {
    const item = reactions[name]
    const runs = Math.ceil(item.askQuantity / item.quantity)
    const cost = runs * item.items[0].quantity
    return acc + cost
  }, 0)

  return total
}

const autoRefine = (name) => {
  if (name == 'ORE') return
  const re = reactions[name]
  re.items.forEach(item => {
    refineAsks(item.name)
    // debug(item)
    autoRefine(item.name)
  })
}

updateAsks('FUEL', 1)
debug(reactions)
autoRefine('FUEL')
debug('total', calcTotal())

// 610203, too low