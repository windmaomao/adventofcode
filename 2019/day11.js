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

let INIT = 0, print = false, once = true, i = 0, relative = 0, done = false, res
let p = {x: 16, y: 9}, dir = 'n', acc =[], map = new Map(), key, paint = 0, ins = [0, 0]
const max = { x: 100, y: 100 }
const arr = new Array(max.y).fill(0).map(item => new Array(max.x).fill(' '))
while (!done) {
  key = p.x + ',' + p.y
  painted = map.get(key) || INIT
  res = intcode(raw, { once, print, output: painted, i, relative })
  i = res.i; ins[0] = res.output; relative = res.relative
  res = intcode(raw, { once, print, output: ins[0], i, relative })
  i = res.i; ins[1] = res.output; relative = res.relative
  console.log(ins[0], ins[1], i)
  done = res.done
  if (!done) {
    acc.push(p)
    paint = ins[0]
    map.set(key, paint)
    arr[p.y][p.x] = paint ? '*' : ' '
    console.log(p.x, p.y, painted, paint, map.size)
    // turn 
    dir = nextDir(dir, ins[1])
    // console.log(dir)
    // move
    p = nextPos(p, dir)
  } else {
    done = true
  }
}

console.log(map.size)
const picture = arr.map(row => row.join('')).reverse().join('\n')
console.log(picture)

// 0 black., 1 white; 0# left, 1 right

// That's not the right answer. Curiously, it's the right answer for someone else; you might be logged in to the wrong account or just unlucky.In any case, you need to be using your puzzle input.If you're stuck, make sure you're using the full input data; there are also some general tips on the about page, or you can ask for hints on the subreddit.Please wait one minute before trying again. (You guessed 2093.)[Return to Day 11]