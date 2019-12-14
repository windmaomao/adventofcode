const filereader = require('./utils/filereader')
const raw = filereader.readFile('day14e.data', '\n')
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
      metioned: 0,
      askQuantity: 0,
      children: 0
    }
  } else {
    debug('warning')
  }

  return acc
}, {})

const updateMentioned = (name) => {
  if (name == 'ORE') return

  const re = reactions[name]
  re.metioned++

  re.items.forEach(item => {
    updateMentioned(item.name)
  })
}

const updateChildren = (name) => {
  if (name == 'ORE') return 1

  const re = reactions[name]
  let count = 0
  re.items.forEach(item => {
    count = count + updateChildren(item.name)
  })
  re.children = re.children + count
  return re.children
}

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
    // const runs = Math.ceil(item.askQuantity / item.quantity)
    const runs = item.askQuantity / item.quantity
    const cost = runs * item.items[0].quantity
    return acc + cost
  }, 0)

  return total
}

const sortList = test => test.map((val, ind) => { return { ind, val } })
  .sort((a, b) => { return a.val > b.val ? 1 : a.val == b.val ? 0 : -1 })
  .map((obj) => obj.ind);

const autoRefine = () => {
  reactions['FUEL'].metioned = 0
  const names = Object.keys(reactions)

  debug(names)

  const metionedList = names.map(name => {
    return reactions[name].children
  })

  debug(metionedList)

  const sorted = sortList(metionedList).reverse()
  debug(sorted)

  // refineAsks(names[6])

  sorted.forEach(index => {
    refineAsks(names[index])
  })
}

updateAsks('FUEL', 1)
updateMentioned('FUEL')
updateChildren('FUEL')
autoRefine('FUEL')
debug(reactions)
debug('total', calcTotal())

// 610203, too low 
// 1063118, too high