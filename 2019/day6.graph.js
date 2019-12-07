const filereader = require('./utils/filereader.js')
const orbits = filereader.readFile('/day6.data')
const jsgraphs = require('./utils/jsgraph.js')

const planets = {}
orbits.forEach((orbit) => {
  const p = orbit.split(')')
  const child = p[1], parent = p[0]
  planets[child] = parent;
})

const pks = ['COM'].concat(Object.keys(planets))
const _id = name => pks.indexOf(name)

const g = new jsgraphs.Graph(pks.length)
Object.keys(planets).forEach(p => {
  g.addEdge(_id(planets[p]), _id(p))
})

// g.node(2).label = 'Hello'; // assigned 'Hello' as label for node 2
// g.edge(0, 2).label = 'World'; // edge between 0 and 2

const dfs = new jsgraphs.DepthFirstSearch(g, _id('YOU'))
const path = dfs.pathTo(_id('SAN')).map(id => pks[id])

console.log(path.length - 3)

