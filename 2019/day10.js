const filereader = require('./utils/filereader')
const raw = filereader.readFile('day10a.data')
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

// const count = asteroids.length
// const angles = [
//   [1, 0], 
//   [1, 1], [2, 1], [3, 1], [4, 1],
//           [1, 2], [1, 3], [1, 4]
// ]

const inside = index => {
  return (index >= 0) && index < size
}

// angles = [
//   [-5, 1], [-4, 1], [-3, 1], [-2, 1], [-1, 1], [2, 1], [3, 1], [4, 1], [5, 1],
//   [-5, -1], [-4, -1], [-3, -1], [-2, -1], [-1, -1], [2, -1], [3, -1], [4, -1], [5, -1],
//   [1, -5], [-4, 1], [-3, 1], [-2, 1], [-1, 1], [2, 1], [3, 1], [4, 1], [5, 1],
// ]

const angles = []
for (let i = -size; i<=size; i++) {
  angles.push([1, i])
  angles.push([-1, i])
  angles.push([i, 1])
  angles.push([i, -1])
}

const detects = asteroids.map(a => {
  return lineOfSight = angles.reduce((acc, angle) => {
    let x = a.x, y = a.y
    let foundIndex = -1, insideBox = true
    do {
      x += angle[0]
      y += angle[1]
      insideBox = inside(x) && inside(y)
      if (insideBox) foundIndex = gridNew[y][x]
      console.log(x, y, foundIndex)
    } while ((foundIndex < 0) && insideBox)

    if (foundIndex >=0) acc.push(foundIndex)
    return acc
  }, [])
})

console.log('Day 10/1:', indexOf(detects.map(v => v.length), 'max'))