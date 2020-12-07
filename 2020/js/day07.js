const read = require('./read.js')
const fn = read('07')

//  lr -> w, my
//  do -> bw, my
//  bw -> sg
//  my -> sg, fb
//  sg -> dv, vp
//  dv -> fb, db
//  vp -> fb, db
//  fb -> null
//  db -> null

const bagGraph = strs => {
  const m = {}
  const pattern = "[a-z]+ [a-z]+ bag"
  
  strs.map(s => {
    const bags = [...s.matchAll(pattern)]
      .map(v => v[0])
      .map(v => v.slice(0, v.length - 4))

    for (let i = 1; i < bags.length; i++) {
      const j = bags[i]
      if (!m[j]) m[j] = []
      m[j].push(bags[0])
    }
  })
//  console.log(m)
  return m
}

const part1 = m => {
  const stack = ["shiny gold"]
  const visited = {}
  
  while (stack.length) {
    const node = stack.shift()
    if (!visited[node]) {
      visited[node] = true
      
      const parents = m[node]
      if (parents) {
        for (let i = 0; i < parents.length; i++) {
          if (!visited[parents[i]]) stack.push(parents[i])
        }
      }
    }
  }
  
  return Object.keys(visited).length - 1
}

const graph = bagGraph(fn)
console.log(part1(graph))

