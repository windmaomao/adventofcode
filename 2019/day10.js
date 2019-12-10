const filereader = require('./utils/filereader')
const raw = filereader.readFile('day10.data')
const indexOf = require('./utils/indexOf')

const grid = raw.map(row => row.split(''))
const size = grid.length
const asteroids = []

let count = 0
const gridNew = new Array(size).fill(0).map(_ => 
  new Array(size).fill(-1)
)
for (let i=0; i < size; i++) {
  for (let j=0; j < size; j++) {
    if (grid[i][j] !== '.') {
      asteroids.push({ x: j, y: i })
      gridNew[i][j] = count
      count++
    }
  }
}

const inside = index => {
  return (index >= 0) && index < size
}

function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

const angles = [], angleMax = size - 1
const add = (n) => {
  if (gcd_two_numbers(n[0], n[1]) <= 1) 
    angles.push(n)
}
for (let i = -angleMax; i<=angleMax; i++) {
  for (let j = 1; j<=angleMax; j++) {
    add([j, i])
    add([-j, i])
    add([i, j])
    add([i, -j])
  }
}

const detects = asteroids.map(a => {
  // const a = asteroids[8]
  return lineOfSight = angles.reduce((acc, angle) => {
    let x = a.x, y = a.y
    let foundIndex = -1, insideBox = true
    do {
      x += angle[0]
      y += angle[1]
      insideBox = inside(x) && inside(y)
      if (insideBox) foundIndex = gridNew[y][x]
      // console.log(x, y, foundIndex)
    } while ((foundIndex < 0) && insideBox)

    if (foundIndex >=0) {
      // console.log(foundIndex, angle[0], angle[1])
      if (acc.indexOf(foundIndex) <0) acc.push(foundIndex)
    }
    return acc
  }, []).sort()
})

const maxId = indexOf(detects.map(v => v.length), 'max')
console.log('Day 10/1:', asteroids[maxId], detects[maxId])
