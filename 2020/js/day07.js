const read = require('./read.js')
const fn = read('07')

const root = "shiny gold"

const bagParents = strs => {
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
  const stack = [root]
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

const bagContains = (strs) => {
  const m = {}
  const bagPattern = "[a-z]+ [a-z]+ bag"
  const numPattern = "[0-9]"
  
  strs.map(s => {
    const bags = [...s.matchAll(bagPattern)]
      .map(v => v[0])
      .map(v => v.slice(0, v.length - 4))
    const nums = [...("1 "+s).matchAll(numPattern)]
      .map(v => parseInt(v[0]))

    let i = 1
    while (i < nums.length) {
      const j = bags[0]
      if (!m[j]) m[j] = []
      m[j].push([bags[i], nums[i]])
      i++
    }
  })
  return m
}

const part2 = m => {
  const visited = {}
  
  const calc = node => {
    const childs = m[node]
    if (!childs) return 0
    if (visited[node]) return visited[node]
    
    let sum = 0
    for (let i = 0; i < childs.length; i++) {
      const [child, count] = childs[i]
      const cc = calc(child)
      sum += (cc > 0) ? (count * (cc + 1)) : count
    }
    
    visited[node] = sum
    return sum
  }

  return calc(root)
}


//  lr -> 1 bw, 2 my
//  do -> 3 bw, 4 my
//  bw -> 1 sg
//  my -> 2 sg, 9 fb
//  sg -> 1 dv, 2 vp
//  dv -> 3 fb, 4 db
//  vp -> 5 fb, 6 db
//  fb -> null
//  db -> null

const parentMap = bagParents(fn)
console.log(part1(parentMap))

const containMap = bagContains(fn)
console.log(part2(containMap))
