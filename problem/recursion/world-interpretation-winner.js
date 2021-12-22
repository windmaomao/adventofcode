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

const genMemoKey = (keys, p) => 
  [...keys].sort().join('') + `:(${p})`


const findMazeSteps = (maze, startPos, numKeys) => {
  // starting at a source pos with keys taken
  // find the minimium steps to collect rest keys
  const minMazeSteps = (srcPos, keysTaken) => {
    const memoKey = genMemoKey(keysTaken, srcPos)
    let res = Infinity
    
    if (memo[memoKey] == undefined) {
      if (keysTaken.length == numKeys) {
        console.log('>', keysTaken.join(''))
        res = 0
      } else {
        const ks = findMazeKeys(maze, srcPos, keysTaken)
//      console.log(ks)
        Object.entries(ks).forEach(([c, { pos, k }]) => {
          res = Math.min(
            res,
            minMazeSteps(pos, [...keysTaken, c]) + k
          )
        })
      }
      memo[memoKey] = res
    }
    return memo[memoKey]
  }
  
  const memo = {}
  return minMazeSteps(startPos, [])
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
#########`                // 8
log(World(world1))

const world2 = `
########################
#f.D.E.e.C.b.A.@.a.B.c.#
######################.#
#d.....................#
########################` // 86
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
#################`        // 136
log(World(world3))

const world4 = `
########################
#@..............ac.GI.b#
###d#e#f################
###A#B#C################
###g#h#i################
########################` // 81
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
#################################################################################`  //4700