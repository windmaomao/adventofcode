const filereader = require('./utils/filereader')
const raw = filereader.readFile('day11.data', ',', true)
const intcode = require('./day11_intcode')

const nextMap = {
  'n0': 'w', 'n1': 'e',
  'w0': 's', 'w1': 'n',
  's0': 'e', 's1': 'w',
  'e0': 'n', 'e1': 's',
}
const dirMap = {
  'n': { x: 0, y: 1 },
  'e': { x: 1, y: 0 },
  's': { x: 0, y: -1 },
  'w': { x: -1, y: 0 },
}

const nextDir = (d, turn) => nextMap[`${d}${turn}`]
const nextPos = (p, dir) => {
  const dp = dirMap[dir]
  return {x: p.x + dp.x, y: p.y + dp.y}
}

// Mode 0 - no relative, black background
// Mode 1 - relative, white background

const paintBoard = (data, mode) => {
  let print = false, once = true, i = 0, relative = 0, done = false
  let res, p = { x: 16, y: 9 }, dir = 'n', map = new Map()
  const max = { x: 100, y: 100 }
  const arr = new Array(max.y).fill(0).map(item => new Array(max.x).fill(' '))
  while (!done) {
    const key = p.x + ',' + p.y
    if (mode === 0) {
      painted = map.get(key) || 0
      res = intcode(data, { once, print, output: painted, i })
      i = res.i; code0 = res.output; 
      res = intcode(data, { once, print, output: code0, i })
      i = res.i; code1 = res.output;
    } else {
      painted = map.get(key) || 1
      res = intcode(data, { once, print, output: painted, i, relative })
      i = res.i; code0 = res.output; relative = res.relative
      res = intcode(data, { once, print, output: code0, i, relative })
      i = res.i; code1 = res.output; relative = res.relative
    }
    // console.log(ins[0], ins[1], i)
    done = res.done
    if (!done) {
      map.set(key, code0)
      arr[p.y][p.x] = code0 ? '*' : ' '
      // console.log(p.x, p.y, painted, paint, map.size)
      // turn 
      dir = nextDir(dir, code1)
      // console.log(dir)
      // move
      p = nextPos(p, dir)
    }
  }
  return {map, arr}
}

const day111 = paintBoard([...raw], 0)
console.log('Day 11/1:', day111.map.size)
const day112 = paintBoard([...raw], 1)
const picture = day112.arr.map(row => row.join('')).reverse().join('\n')
console.log(picture)

// 0 black., 1 white; 0# left, 1 right