const filereader = require('./utils/filereader')
const raw = filereader.readFile('day11.data', ',', true)
const intcode = require('./day11_intcode')

// The robot needs to be able to move around on the grid of square panels on the side of your ship, detect the color of its current panel, and paint its current panel black or white. (All of the panels are currently black.)

const nextDir = (d, turn) => {
  if (d === 'n' && turn === 0) return 'w'
  if (d === 'n' && turn === 1) return 'e'
  if (d === 'w' && turn === 0) return 's'
  if (d === 'w' && turn === 1) return 'n'
  if (d === 's' && turn === 0) return 'e'
  if (d === 's' && turn === 1) return 'w'
  if (d === 'e' && turn === 0) return 'n'
  if (d === 'e' && turn === 1) return 's'
  console.log('WRONG', d, turn)
}

const dirPos = d => {
  if (d === 'n') return {x: 0, y: 1}
  if (d === 'e') return { x: 1, y: 0 }
  if (d === 's') return { x: 0, y: -1 }
  if (d === 'w') return { x: -1, y: 0 }
  console.log('WRONG')
}

const nextPos = (p, dir) => {
  const dp = dirPos(dir)
  return {x: p.x + dp.x, y: p.y + dp.y}
}

let INIT = 1, print = false, once = true, i = 0, relative = 0, done = false, res
let p = {x: 16, y: 9}, dir = 'n', acc =[], map = new Map(), key, paint = 0, ins = [0, 0]
const max = { x: 100, y: 60 }
const arr = new Array(max.y).fill(0).map(item => new Array(max.x).fill(' '))
while (!done) {
  key = p.x + ',' + p.y
  painted = map.get(key) || INIT
  res = intcode(raw, { once, print, output: INIT, i, relative })
  i = res.i; ins[0] = res.output; relative = res.relative
  res = intcode(raw, { once, print, output: ins[0], i, relative })
  i = res.i; ins[1] = res.output; relative = res.relative
  // console.log(ins[0], ins[1], i)
  done = res.done
  if (!done) {
    acc.push(p)
    paint = ins[0]
    map.set(key, paint)
    arr[p.y][p.x] = paint ? '*' : ' '
    // console.log(p.x, p.y, painted, paint, map.size)
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