const read = require('./read.js')
const arr = read('11').map(v => v.split(''))
const n = arr.length
const arr2 = new Array(n+2)
  .fill(0).map(v => new Array(n+2).fill('.'))
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    arr2[i+1][j+1] = arr[i][j]
  }
}

const clone = a => a.map(v => [...v])
const dirs = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1],
]

const part1 = grid => {
  let curr = clone(grid)
  
  const seat = (i, j) => {
    const me= curr[i][j]
    if (me == '.') return me
    const ocupied = dirs.filter(d => {
      return curr[i+d[0]][j+d[1]] == '#'
    }).length
    if (me == 'L' && ocupied == 0) return '#'
    if (me == '#' && ocupied >=4) return 'L'
    return me
  }
  
  const step = () => {
    const next = clone(curr)
    let c = 0
    for (let i = 1; i < n+1; i++) {
      for (let j = 1; j < n+1; j++) {
        next[i][j] = seat(i, j)
        if (next[i][j] == '#') c++
      }
    }
    return [next, c]
  }
  
  const run = () => {
    let i = 0, count
    while (i < 100) {
      [curr, count] = step()
      console.log(count)
      i++
    }
  }
  
  run()
  return curr.map(v => v.join(''))
}

part1(arr2)
//console.log(part1(arr2))
