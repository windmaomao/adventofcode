const t = require('./utils/tjs.js')

const root = {
  name: 'COM',
  children: [
    {
      name: 'YOU',
      children: []
    }
  ]
}

t.bfs(root, (node, par) => {
  console.log(node.name)
})