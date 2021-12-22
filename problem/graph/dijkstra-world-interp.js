const { log } = console
const DIRS = [[-1,0], [0,1], [1,0], [0,-1]]
const isKey = c => (c >= 'a' && c <= 'z')
const isDoor = c => (c >= 'A' && c <= 'Z')

// find out maze origin and num of keys
const mazeStats = (maze) => {
  let startPos = [0, 0], numKeys = 0
  for (let i = 0; i < maze.length; i++) {
    const row = maze[i]
    const j = row.indexOf('@')
    if (j >= 0) {
      startPos = [i, j]
    }
    numKeys += row.filter(isKey).length
  }
  return { startPos, numKeys }
}

// given maze, start position and num of keys
function World(_maze) {
  // create a char maze
  const maze = _maze.map(s => s.split(''))
  // set maze char
  const setMazeChar = ([i, j], c) => { maze[i][j] = c }	

  const { startPos, numKeys } = mazeStats(maze)
  const posKey = (pos) => pos.join(',')

  const char = ([i, j], objs = []) => {
    const c = maze[i][j]
    if (objs.indexOf(c) >= 0) return '.'
    return c
  }

  // given pos and taken objs
  // find all possible next pos
  const dirs = (pos, objs = []) => {
    const c = char(pos, objs)
    if (c != '.') return []
    
    return DIRS.map(([di, dj]) => [pos[0]+di, pos[1]+dj])
    .filter(([ni, nj]) => maze[ni][nj] != '#')
  }
  
  // given a source pos and taken objs
  // find all reachable objs
  const findDests = (srcPos, objs) => {
    const queue = [[srcPos, 0]]
    const marked = {}
    const dests = {} 
    
    const mark = pos => { marked[posKey(pos)] = true }
    const isMarked = pos => marked[posKey(pos)] || false
    
    while (queue.length) {
      const [pos, k] = queue.shift()
      mark(pos)
      const c = char(pos, objs)
      if (c != '.') {
        dests[c] = { pos, k }
      }
      dirs(pos, objs).forEach(nextPos => {
        if (!isMarked(nextPos)) {
          queue.push([nextPos, k+1])
        }
      })
    }
    
    return dests
  }
  
  // given the door, and taken objs
  const canOpen = (door, objs) => {
    const keys = objs.filter(isKey)
    return keys.indexOf(door.toLowerCase()) >= 0
  }
    
  const dijkstra = (srcPos, srcObj) => {
    const nodes = {}
    const pq = new Map()
    
    const weight = objs => objs.filter(isKey).length
    
    const srcNode = { dist: 0, from: '', pos: srcPos, objs: [srcObj] }
    nodes[srcObj] = srcNode
    pq.set(srcObj, srcNode)
    while (pq.size) {
      // find the shortest path so far
      const u = [...pq.keys()].sort((a, b) => {
        return weight(pq.get(a).objs) - weight(pq.get(b).objs)
      })[0]
      const { dist, from, pos, objs } = pq.get(u)
//    console.log([...pq.keys()], u)
      pq.delete(u)
      
      // test next paths
      const dests = findDests(pos, objs)
      const nextObjs = Object.keys(dests)
        .filter(c => isKey(c) || canOpen(c, objs))
      
      nextObjs.forEach(v => {
        const { pos: nextPos, k } = dests[v]
        const nextDist = dist + k
        let nextNode = nodes[v]
        if (!nextNode) {
          nextNode = { dist: Infinity, objs: [] }
          nodes[v] = nextNode
        }
        
        if (weight([...objs, v]) > weight(nextNode.objs)) {
          console.log([...objs, v], nextNode.objs)
          nextNode.dist = nextDist
          nextNode.from = u
          nextNode.pos = nextPos
          nextNode.objs = [...objs, v]
          pq.set(v, nextNode)
        }
      })
    }
    console.log(nodes)
  }

  dijkstra(startPos, '@')
}

World([
  "#########",
  "#b.A.@.a#",
  "#########",
])  // 8

//World([
//"########################",
//"#f.D.E.e.C.b.A.@.a.B.c.#",
//"######################.#",
//"#d.....................#",
//"########################"
//])  // 86