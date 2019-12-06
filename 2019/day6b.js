const t = require('./utils/tjs.js')
const data = require('./utils/data6.js')

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

function apendNode(pk, pn) {
  const parent = nodeMap[pk]
  pn.name = pk
  pn.children = []
  pn.level = 0
  pn.dist = 0
  parent.cs.forEach(ck => {
    cn = {}
    pn.children.push(cn)
    apendNode(ck, cn)
  })
}

// prepare the tree
const root = {}
apendNode('COM', root)

let totalDist = 0
t.bfs(root, (n, par) => {
  if (par) {
    n.dist += par.dist + 1
    n.level = par.level + 1
    totalDist += n.dist
  }
})

console.log('Day 6-1:', totalDist)

let lca
t.dfs(root, (c, par, ctrl) => {
  const YOU = t.find(c, n => n.name === 'YOU')
  const SAN = t.find(c, n => n.name === 'SAN')

  if (YOU && SAN) {
  } else {
    if (YOU || SAN) {
      ctrl.stop = true
      lca = par
    }
  }
})

const you = t.find(lca, n => n.name === 'YOU')
const san = t.find(lca, n => n.name === 'SAN')

console.log('Day 6-2:', 
  you.level - lca.level - 1 + 
  san.level - lca.level - 1
)

