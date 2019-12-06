const TreeModel = require('./utils/treemodel.js')
const data = require('./utils/data6.js')
const tree = new TreeModel()

// preprocess the data
const nodeMap = data.reduce((acc, raw) => {
  const p = raw.split(')')
  const child = p[1], parent = p[0]
  if (!acc[parent]) acc[parent] = { cs: [], ps: [] }
  if (!acc[child]) acc[child] = { cs: [], ps: [] }
  acc[parent].cs.push(child)
  acc[child].ps.push(parent)

  return acc
}, {})

const _new = name => ({ name, level: 0, dist: 0 })

function apendChildren(pk, pn) {
  const parent = nodeMap[pk]
  parent.cs.forEach(ck => {
    const cn = tree.parse(_new(ck))
    pn.addChild(cn)
    apendChildren(ck, cn)
  })
}

// prepare the tree
const root = tree.parse(_new('COM')) 
apendChildren('COM', root)

// walk the tree
root.walk({ strategy: 'breadth' }, n => {
  if (n.parent) {
    n.model.level = n.parent.model.level + 1
    n.model.dist += n.parent.model.dist + 1
  }
})

let totalDist = 0
root.walk(n => {
  totalDist += n.model.dist
})

// const you = root.first(n => n.model.name === 'YOU')
console.log('Day 6-1:', totalDist)

const findNode = (node, name) => node.first(n => n.model.name === name)

// find lca
let lca
root.walk(c => {
  const YOU = findNode(c, 'YOU')
  const SAN = findNode(c, 'SAN')
  if (YOU && SAN) {
  } else {
    if (YOU || SAN) {
      lca = c.parent
      return false
    }
  }
})

const you = findNode(lca, 'YOU')
const san = findNode(lca, 'SAN')

console.log('Day 6-2:',
  you.model.level - lca.model.level - 1 +
  san.model.level - lca.model.level - 1
)
