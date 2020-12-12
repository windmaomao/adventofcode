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
console.log(bfs('a', p => m[p] || [], p => !!p))

module.exports = bfs