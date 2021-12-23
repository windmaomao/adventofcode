const move = (a, b) => [a[0]+b[0], a[1]+b[1]]

// given data build a maze matrix
const buildMaze = (data) => {
  const maze = data.slice(1).split('\n')
    .map(r => r.split(''))
    
  let startPos = [0, 0], numKeys = 0
  for (let i = 0; i < maze.length; i++) {
    const row = maze[i]
    const j = row.indexOf('@')
    if (j >= 0) {
      startPos = [i, j]
    }
    numKeys += row.filter(c => c.match(/[a-z]/))
      .length
  }
  
  return { maze, startPos, numKeys }
}

// starting at a source pos with keys taken
// find next keys
const findMazeKeys = (maze, srcPos, keysTaken) => {
  const queue = [[srcPos, 0]]
  const marked = {}
  const dests = {}
  
  const char = ([i, j]) => maze[i][j]
  const canOpen = c => keysTaken
    .indexOf(c.toLowerCase()) >= 0
  
  while (queue.length) {
    const [pos, k] = queue.shift()
    marked[pos] = true
    const c = char(pos)
//  console.log(pos, k, c)
    if (c.match(/[a-z]/) 
      && keysTaken.indexOf(c) < 0) {
      dests[c] = { pos, k }
    } else {
      [[-1,0], [0,1], [1,0], [0,-1]]
        .map(dp => move(pos, dp))
        .filter(p => !marked[p])
        .filter(p => char(p) !== '#')
        .filter(p => !(
          char(p).match(/[A-Z]/) && !canOpen(char(p))
        )).forEach(p => { queue.push([p, k + 1]) })
    }
  }
  
  return dests
}

const findMazeSteps = (maze, startPos, numKeys) => {
  const stacks = {}
  let links = 0, usages = 0

  const stackId = ([i, j], keys) => 
  '@' + [...keys].sort().join('') + `>${maze[i][j]}`
  
  const createStack = (srcPos, keysTaken) => {
    const id = stackId(srcPos, keysTaken)
    if (!stacks[id]) {
      stacks[id] = {
        id, srcPos, keysTaken,
        done: false,
        res: Infinity,
        stacks: [],
        nodes: 1      // total nodes
      }
    }
    return stacks[id]
  }
  
  const runStack = (stack) => {
    if (!stack.done) {
      const { srcPos, keysTaken } = stack
      if (keysTaken.length == numKeys) {
        stack.res = 0
      } else {
        const ks = findMazeKeys(maze, srcPos, keysTaken)
        stack.stacks = Object.entries(ks)
          .map(([c, { pos, k }]) => {
            const nextStack = createStack(
              pos, [...keysTaken, c]
            )
            runStack(nextStack)
            stack.res = Math.min(
              stack.res, nextStack.res + k
            )
            stack.nodes += nextStack.nodes
            return nextStack.id
          })
      }
      stack.done =true
      usages += 1
    }
    links += stack.nodes
    return stack
  }
  
  
  const root = createStack(startPos, [])
  runStack(root)
//for (let id in stacks) {
//  const s = stacks[id]
//  console.log(s.id, s.stacks, s.paths)
//}
  console.log(root, links, usages)
  return root.res
}

function World(data) {
  const { maze, startPos, numKeys } = buildMaze(data)
  console.log('maze', startPos, numKeys)
//console.log(findMazeKeys(maze, [1, 7], ['a']))
  return findMazeSteps(maze, startPos, numKeys)
}

const {log} = console
const world1 = `
#########
#b.A.@.a#
#########`                // 8 // nodes: 6 actual: 3
log(World(world1))

const world2 = `
########################
#f.D.E.e.C.b.A.@.a.B.c.#
######################.#
#d.....................#
########################` // 86 // nodes: 46 actual: 9
log(World(world2))

const world3 = `
#################
#i.G..c...e..H.p#
########.########
#j.A..b...f..D.o#
########@########
#k.E..a...g..B.n#
########.########
#l.F..d...h..C.m#
#################`        // 136 // nodes: 200793976665 actual: 10053
log(World(world3))

const world4 = `
########################
#@..............ac.GI.b#
###d#e#f################
###A#B#C################
###g#h#i################
########################` // 81 // nodes: 7544 actual: 90
log(World(world4))

worldN = `
#################################################################################
#.....#.....#z#...C.....#.........#.....#.#.....#.......V.#.....#.........#b....#
###.#.###.#.#.#.#####.###.#.#######.###.#.#.#.#.#.#######.#####.#.#######.#.#.###
#...#..y..#.#.#.#...#.#...#........p#...#...#.#...#.....#.#...T.#...#...#...#...#
#.#.#######.#.#.#.###.#.#############.#.#####.#####.#####.#.#.###.###.#.#.#####H#
#.#.#.....#.#.#.#...#...#..l....#.....#.#...Y.#...#.......#.#.#...#...#.#.....#.#
#.#.#.###.#.#.#.###.#####.###.###.#####.#.#####.###.#######.###.###.###.#######.#
#.#.#.G.#.#...#...#.........#...#.#.....#.#...#...#.#.#.........#...#.#...#.....#
#.#####.#.#######.#############.#.#####.#.#.###.#.#.#.#.#####.###.###.###.#.###.#
#.....#.#.......#.........#.....#.....#.#.#.#...#...#...#...#...#.#.......#...#.#
#.#.#.#.#######.#########.#.###.#####.###.#.#.###########.#.###.#.###.#######.#.#
#.#.#.#.#.....#.....#...#...#.#.#...#...#.#...............#...#.#...#.........#.#
###.###.###.#.###.###.#.#####.#.#.#####.#.###################.#####.###########.#
#...#...#...#.#...#...#...#...#...#.....#...#...#...........#.....#.#..g..#...#.#
#A###.###.###.#.#.#.###.###.#.###.#.###.###Z#.#.#.#########.#####.#.#.###.#.#.#.#
#...#...#.#...#.#.#.#.#.....#.....#.#.#.#.#...#..n#.......#.....#i..#...#...#.#.#
#.#.###.#.#.###.###.#.#############.#.#.#.#########.#.#########N#######.#####.#.#
#.#...#...#...#.#.......#...........#.#.#.#.X.....#.#.#.......#....o#.#.#...#.#.#
#.###.#######.#.#.#######.###########.#.#.#.###.###.#.#.#####.#####.#.#.###.#.#.#
#v#.#.#.....#.#...#.....#.......#.#.....#.#...#..u..#.#.#e....O...#.#.#.#...#...#
#.#.#.#.###.#.#####.###.#.#####.#.#.#####.###.#######.#.###.#####.#.#.#W#.#.#####
#...#.#...#.#.#.#...#...#.....#.#.#.#...#.........#...#...#.#.#.#.#.#.#...#.#...#
#####.#.###.#.#.#.#######.#####.#.#.###.#.#########.#####.###.#.#.#.#.#####.#.###
#.....#.#...#...#.#.......#.....#.#.....#.....#...#.#.....#...#.....#.....#.#...#
#.#####.#.#####.#.###.#####.#####.#####.#####.#.#.#.#.###.#D#########.#####.###.#
#.I.#...#.....#.#...#...#...#.......#...#.K.#.#.#...#q..#.#.#......d#.....#...#.#
#.#.#.#####.#.#.###.#####.###.###.###.#####.#.#.#######.#E#.#.#####.###.#.###.#.#
#.#.#.#...#.#...#...#...#...#...#.....#.#...#.#.......#.#.#...#...#.R.#.#...#.#.#
#.#.#.#.#.#######.###.#.###.###.#######.#.###.#####.###.#######.#####.#.#.###.#.#
#.#...#.#.........#...#.....#.....#...#.#...#.#...#...#.....#r..#.....#.#.#...#.#
#######.###########.#############.#.#.#.###.#.#.#.###.###.#.#.#.#.#####.#.#.###.#
#w..#...#.........#.....#.....#...#.#...#...#.#.#.....#.#.#.#.#.#.#...#.#...#...#
#.#.#.###.#######.###.#.#.###.#.###.###.#.###.#.#####.#.#.###Q#.#.###.#.#####.#.#
#.#.#.....#.....#...#.#.....#.#.....#.#.#...#.#...#.....#.....#...#...#.......#.#
#.#.#######.###.###.#.#######.#######.#.#.#.#.###.#####.###########.#.#########.#
#.#.#.......#.#...#.#.#.....#...#.....#.#.#.#...#...#.....J.........#...#...#...#
#.#.#.#######.#.###.###.###.###.#.###.#.#.#.###.###.###############.#####.#.#.###
#.#...#...#...#.....#...#.#.....#.#.#...#.#.....#.#.......#...#...#.#...#.#.#.#.#
#.#####.#.#.#.#######.###.#######.#.#####.#######.#######.#.#.#.#.###.#.#.#.#.#.#
#.......#...#.........#.................................#...#...#.....#...#.....#
#######################################.@.#######################################
#.....#.......#.#.........#...#...#...#...........#.........#...................#
#.###.#.#####.#.#.#####.#.#.#.#.#.#.#.#.#.#.#######.#######.#.#####.#######.###.#
#...#...#...#...#.#...#.#...#...#...#...#.#.#...#...#...#.#...#...#.#.....#.#...#
#.#.###.#.#.#####.#.#.#.#####.#########.#.#.#.#.#.###.#.#.#####.#.#.#.#####.#.###
#.#...#.#.#.......#.#.#.#.....#.......#.#.#.#.#...#...#...#...#.#.#...#...#.#.#.#
#.###.###.###########.#.#.#####.#####.###.#.#.#####.#######.#.#.#.#####.#.#.#.#.#
#...#...#.#.......#...#.#.#.#...#...#...#.#...#.....#.......#...#...#...#.#.#.#.#
###.###.#.#####.#.#.###.#.#.#.###.#.#.#.#.#####.#####.#############.#.###.#.#.#.#
#.#.#.#.........#.#...#.#...#.#...#.#.#.#.#.........#.....#.......#...#.#...#..m#
#.#.#.###########.###.#.###.#.#.###.###.#.###.#####.#####.#.#####.#####.###.#####
#...#.#.....#...#.#...#.#...#.#.#.#...#.#k..#.#.......#...#.#...#...#.......#...#
#.###.#.###.#.###.#.###.#.###.#.#.###.#.###.#.#.#####.#.###.#.#.###.###.#####.#.#
#...#j#.#.#.#.#...#.#...#.#...#.#.#...#.#...#.#.#.....#.......#...#...#.#...S.#.#
###.#.#.#.#.#.#.###.#.#####.###.#.#.###.#.#####.#.#############.#####.###.#####.#
#.#...#.#.#.#.......#.......#...#.#.#...#.......#.#...#...#.....#.....#...#...#.#
#.###.#.#.#.#######.#########.###.#.#.#.###.#######.#.#.#.###.###.#.###.#####.#.#
#.....#...#...#.M.........#...#.....#.#.#...#.......#...#...#...#.#.#...#.....#.#
#.#######.###.#.#####.#####.###.#####.#.#.###.#############.#####.###.###.#####.#
#...#.#...#.#.#.#...#.#...#.#.........#.#.#.#.....#.......#....a#...#.#...#...#.#
###.#.#.###.#.###.#.###.#.#.###########.#.#.#####.#.#####.#####.#.#.#.#.###.#.#.#
#.#...#....t#.....#.#.#.#.#...........#.#...#...#.#.....#...#...#.#...#.#...#...#
#.###.#####.#######.#.#.#.#.#########.#.###.###.#.#.###.#########.#####.#.#####.#
#.#...#...#.#...#.#...#.#.#...#.....#.#.#.#...#.#.#...#...#.....#...#...#.#...#.#
#.#.###.#.#.#.#.#.#####.#.###.#.#####.#.#.###.#.#.###.###.#.#.#####.###.#.#.#.#.#
#...#.#.#...#.#.....#...#.#...#.#.....#.#...#.#.#...#...#.#.#.#.........#.#.#.#.#
#.###.#.#####.#####.###.#.#.###.#.#####.#.#.#.#.###.###.#.#.#.#.#########.#.###.#
#.....#.#.........#.....#.#.....#...#...#.#.#x#...#.#...#...#...#.........#..f#.#
#####.#.#####.###.#######.#####.###.#.#####.#.#.#.#.#####.#######.#########.#.#.#
#.#...#.#...#.#...#...#...#.....#.#.#...#...#.#.#.#.#...#...L...#.#.......#.#...#
#.#.###.#.#.###.###.#.#.###.#####.#.#####.###.###.#.#B#.#########.###.###.#.#####
#.#.P.#...#.....#.#.#.#...#.......#.....#...#.....#...#.........#...#...#.....#.#
#.###.###########.#.#.###.#############.###.#####.#############.###.#.#######.#.#
#c....#...#.#.......#...#.#.......#...#.#.....#...#...#.....#.#.#...#.#...#.....#
#.#####.#.#.#.#######.###.#.#####.#.#.#.#.#.###.###.#.#.#.#.#.#.#.#####.#.#####.#
#...#..s#.#.F.....#...#...#.#...#.#.#...#.#.#...#...#...#.#.#.#.#.......#.....#.#
###.###.#.#######.#.#.#.###.#.###.#.###.#.###.###########.#.#.#.#####.#######.###
#...#...#.#...#...#.#.#...#.#...#...#.#.#.....#.......#...#...#.#...#.#.....#...#
#.###.###.#.#.#####.#.###.#.#.#.#####.#.#.#######.###.#.#####.#.#.#.###.###.###.#
#.....#.....#.......#...#...#.#.........#.....U...#.....#.....#...#....h#.......#
#################################################################################`  //4700 // nodes: 2637240221573 actual: 6689
//log(World(worldN))
