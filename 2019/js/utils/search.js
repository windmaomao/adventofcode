// https://github.com/petertseng/adventofcode-rb-2019/blob/master/lib/search.rb
//! BFS search path from start to goal
//# Input:
//# - start: starting node
//# - neighbours: neighbour nodes array
//# - goal: goal of node map, { node: true }
//# - num_goals: number of goals allowed
//# Output:
//# - gen: total moves when finished
//# - goals: goals reached with moves for each goal
//# - prev: lastest path map
//# Notes:
//# - node is specified in key like string format
//# - the search stops at the last reacheable node

function bfs(start, neighbours, goal, num_goals = Infinity) {
  let current_gen = [start]
  const prev = { [start] : null }
  const goals = {}
  let gen = -1
  
  while (current_gen.length) {
    gen++
    let next_gen = []
    let cand
    while (cand = current_gen.shift()) {
      if (goal(cand)) {
        goals[cand] = gen
        if (Object.keys(goals).length >= num_goals) {
          next_gen = []
          break
        }
      }
      
      neighbours(cand).forEach(neigh => {
        if (prev[neigh]) return
        prev[neigh] = cand
        next_gen.push(neigh)
      })
    }
    current_gen = next_gen
  }
  
  return { gen, goals, prev }
}

const m = { 'a': ['b', 'c'], 'b': ['c'], 'c': ['d'] }
const founds = bfs('a', p => m[p] || [], p => !!p)
console.log('BFS')
console.log(founds)

function pathOf(prev, target) {
  const path = [target]
  let current = target
  while (current = prev[current]) {
    path.unshift(current)
  }
  return path
}

console.log('PATH_OF')
console.log('a', pathOf(founds.prev, 'a'))
console.log('c', pathOf(founds.prev, 'c'))
console.log('d', pathOf(founds.prev, 'd'))

function astar(start, neighbours, goal) {
  const scores = { [start]: 0 }
  
  const closed = {}
  const open = [start]
  const prev = {}
  
  while (current = open.pop()) {
    if (closed[current]) continue
    closed[current] = true
    
    if (goal(current)) return { cost: scores[current], prev }
    
    neighbours(current).forEach( neigh => {
      const [neighbour, cost] = neigh
      if (closed[neighbour]) return
      
      const tentativeScore = scores[current] + cost
      if (scores[neighbour] == undefined) scores[neighbour] = Infinity
      if (tentativeScore >= scores[neighbour]) return
      
      prev[neighbour] = current
      scores[neighbour] = tentativeScore
      open.push(neighbour)
    })
  }
  
  return null
}

const foundStar = astar(
  'a', 
  p => (m[p] || []).map(v => [v, 1]), 
  p => p == 'd'
)
console.log('A_STAR')
console.log(foundStar)
console.log(pathOf(foundStar.prev, 'd'))

module.exports = {
  bfs, pathOf
}