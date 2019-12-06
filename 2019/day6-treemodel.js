const filereader = require('./utils/filereader.js')
const data = filereader.readFile('/day6.data')
const TreeModel = require('./utils/treemodel.js')
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

console.log('Day 6-1:', totalDist)

const findNode = (node, name) => node.first(n => n.model.name === name)

const findLCA = () => {
  const you = findNode(root, 'YOU')
  const san = findNode(root, 'SAN')
  const yp = you.getPath(), sp = san.getPath()

  let i = 0
  while (
    i < yp.length && i < sp.length && 
    yp[i + 1] === sp[i+1]
  ) {i++}

  const lca = yp[i]
  const _l = n => n.model.level - lca.model.level - 1

  return _l(you) + _l(san)
}

console.log('Day 6-2:', findLCA())