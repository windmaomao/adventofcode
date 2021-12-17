function topologicalSort(jobs, deps) {
  const adjs = {}
  for (let i = 0; i < jobs.length; i++) {
    adjs[jobs[i]] = []
  }
  
  for (let k = 0; k < deps.length; k++) {
    const [i, j] = deps[k]
    adjs[i].push(j)
  }
  
  const marked = {}
  const stack = {}
  const res = []
  let circle = false
  
  const visit = (u) => {
    marked[u] = true
    stack[u] = true
    adjs[u].forEach(v => {
      if (!marked[v]) {
        visit(v)
      } else {
        if (stack[v]) circle = true
      }
    })
    stack[u] = false
    res.push(u)
  }
  
  for (let i = 0; i < jobs.length; i++) {
    if (!marked[jobs[i]]) visit(jobs[i])
  }
  
  return circle ? [] : res.reverse()
}

//console.log(topologicalSort(
//[1,2,3,4], [[1,2],[1,3],[3,2],[4,2],[4,3]]
//))

//console.log(topologicalSort(
//[1, 2, 3, 4, 5, 6, 7, 8], 
//[
//  [3, 1],
//  [8, 1],
//  [8, 7],
//  [5, 7],
//  [5, 2],
//  [1, 4],
//  [6, 7],
//  [1, 2],
//  [7, 6]
//]
//))

//console.log(topologicalSort(
//[1,2,3], [[1,2],[2,3],[3,1]]
//))
