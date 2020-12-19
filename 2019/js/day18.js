const isUppercase = c => (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90)
const isLowercase = c => (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
const isOrigin = c => c == '@'
const isWall = c =>  c == '#'
const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const posKey = (i, j) => `${i},${j}`

const genBoard = () => {
  const m = lines.length
  const n = lines[0].length
  
  const boardPos = () => {
    const res = {}
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const c = lines[i][j]
        if (isLowercase(c) || isOrigin(c)) res[posKey(i, j)] = c
      }
    }
    return res
  }
  
  const board = boardPos()  
  const search = require('./search.js')
  const key2Pos = key => key.split(',').map(v => parseInt(v))
  const keysMap = {}
  const keys = Object.keys(board)

  keys.forEach(thisKey => {
    const othersFound = search.bfs(
      thisKey,
      key => {
        const p = key2Pos(key)
        return dirs
          .map(d => ([d[0] + p[0], d[1] + p[1]]))
          .filter(d => !isWall(lines[d[0]][d[1]]))
          .map(d => posKey(d[0], d[1]))
      },
      key => {
        if (key == thisKey) return false
        const p = key2Pos(key)
        if (isOrigin(lines[p[0]][p[1]])) return false
        return keys.indexOf(key) >= 0
      }
    )
    const goals = {}
    Object.keys(othersFound.goals)
      .forEach(k => { 
        goals[board[k]] = {
          cost: othersFound.goals[k],
          deps: search.pathOf(othersFound.prev, k)
            .map(p => {
              const pos = key2Pos(p)
              return lines[pos[0]][pos[1]]
            })
            .filter(c => isUppercase(c))
        }
      })
    
    keysMap[board[thisKey]] = goals
  })
  return { keysMap }
}

const part1 = (graph) => {
  const goal = Object.keys(graph).length
  const cache = {}
  let counter = 0
  
  const pathKey = path => [
    path[path.length - 1], 
    [...path].sort().join('')
  ].join(':')
  
  const minDist = path => {
    const savedKey = pathKey(path)
//    console.log(path.join(''), savedKey)

    if (path.length === goal) {
      counter++
      return 0
    }
    
    if (cache[savedKey] != undefined) {
//      console.log('cached', savedKey)
      return cache[savedKey]
    }
    
    const pathOpen = deps => deps
      .map(d => path.indexOf(d.toLowerCase()) >= 0)
      .every(v => v)
    
    const lead = path[path.length - 1]
    const nmap = graph[lead]
    const mins = Object.keys(nmap)
      .filter(k => path.indexOf(k) < 0)
      .filter(k => pathOpen(nmap[k].deps))
      .map(k => nmap[k].cost + minDist([...path, k]))
      
    const res = mins.length ? Math.min(...mins) : Infinity
    cache[savedKey] = res
    return res
  }
  
  const mm = minDist(['@'])
//  console.log('Total', counter)
  return mm
}


const load = require('./load.js')
const lines = load('18')

const { keysMap } = genBoard()
//console.log(keysMap)

const run = require('./run.js')
run(part1, keysMap)